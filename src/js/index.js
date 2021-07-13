import AppService from './modules/app.service.jsx';
import { config } from './modules/config.js';
import './modules/header.component.jsx';
import '../scss/main.scss';
import '../index.html';

console.log('2. config key: ', config.key);

const service = new AppService('3. Hello webpack');
service.log();