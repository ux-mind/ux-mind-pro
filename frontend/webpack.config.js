const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[contenthash].${ext}`);

const PUBLICPATH = '/';

const optimize = () => {
	const configObj = {
		splitChunks: {
			chunks: 'all'
		}
	};

	if (isProd) {
		(configObj.minimize = true),
			(configObj.minimizer = [
				new CssMinimizerPlugin(),
				new TerserWebpackPlugin({
					parallel: true
				})
			]);
	}

	return configObj;
};

const plugins = () => {
	const basePlugins = [
		new HTMLWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: `css/${filename('css')}`
		})
	];

	if (isProd) {
		basePlugins.push(
			new CopyWebpackPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, '_redirects'),
						to: path.resolve(__dirname, 'dist')
					}
				]
			}),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }],
							// Svgo configuration here https://github.com/svg/svgo#configuration
							[
								'svgo',
								{
									plugins: [
										{
											name: 'preset-default',
											overrides: {
												cleanupListOfValues: true
											}
										}
									]
									// plugins: extendDefaultPlugins([
									// 	{
									// 		name: 'removeViewBox',
									// 		active: false
									// 	},
									// 	{
									// 		name: 'addAttributesToSVGElement',
									// 		params: {
									// 			attributes: [
									// 				{ xmlns: 'http://www.w3.org/2000/svg' }
									// 			]
									// 		}
									// 	}
									// ])
								}
							]
						]
					}
				}
			})
		);
	}

	return basePlugins;
};

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		app: './js/index.js'
	},
	output: {
		filename: `js/${filename('js')}`,
		path: path.resolve(__dirname, 'dist'),
		publicPath: PUBLICPATH,
		assetModuleFilename: 'img/[hash][ext][query]',
		clean: true
	},
	devtool: isProd ? false : 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, './')
		},
		// historyApiFallback: true,
		historyApiFallback: {
			index: '/dist/'
		},
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					console.log('Skipping proxy for browser request.');
					return `${PUBLICPATH}/index.html`;
				}
			}
		},
		open: true,
		compress: true,
		hot: true, //makes hmr available
		port: 3000
	},
	optimization: optimize(),
	plugins: plugins(),
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.svg/,
				type: 'asset/inline'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset'
			},
			{
				test: /\.(woff|woff2)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash][ext][query]'
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.css$/i, //for css
				use: [
					{
						loader: MiniCssExtractPlugin.loader
						// options: {
						// 	hmr: isDev //hot model reloading - updates without page reload
						// }
					},
					'css-loader'
				]
			},
			{
				test: /\.s[ac]ss$/i, //for sass
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
