import React from 'react';
import Title from '../../Title';
import { motion, AnimatePresence } from 'framer-motion';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ModalHeader from '../../ModalHeader/ModalHeader';
import { useFormik } from 'formik';
import Input from '../../Input';
import AnimatedTextLine from '../../AnimatedTextLine/AnimatedTextLine';
import { basicSchema } from '../../../schemas';
import { useMediaQuery } from 'react-responsive';

import { useDispatch, useSelector } from 'react-redux';
import { toggleContactModal } from '../../../redux/reducers/modalsReducer';

const ContactModal = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

	const opened = useSelector((state) => state.modals.contactModalOpened);

	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: { name: '', email: '', message: '' },
		validationSchema: basicSchema,
		onSubmit: (values) => {
			console.log(values);
			dispatch(toggleContactModal());
		}
	});

	const modalVariants = {
		hidden: {
			translateX: '100%'
		},
		show: {
			translateX: '0%'
		}
	};

	const innerVariants = {
		hidden: {
			opacity: 0,
			translateX: isMobile ? '-25%' : '-70%'
		},
		show: {
			opacity: 1,
			translateX: '0%'
		}
	};

	return (
		<AnimatePresence>
			{opened ? (
				<motion.div
					className={`modal contact-modal modal_opened`}
					variants={modalVariants}
					initial="hidden"
					animate="show"
					exit="hidden"
					transition={{
						type: 'tween',
						duration: isMobile ? 0.35 : 0.6
					}}
				>
					<ModalHeader setOpened={() => dispatch(toggleContactModal())} />
					<Scrollbars>
						<div className="contact-modal__wrapper">
							<div className="container">
								<div className="contact-modal__title">
									<Title size="s">
										Let's discuss your project and&nbsp;find creative solutions
									</Title>
								</div>
								<form
									className="contact-modal__form"
									onSubmit={formik.handleSubmit}
								>
									<Input
										message={
											formik.errors.name && formik.touched.name
												? formik.errors.name
												: null
										}
										value={formik.values.name}
										onChange={formik.handleChange}
										placeholder="Name"
										name="name"
									/>
									<Input
										message={
											formik.errors.email && formik.touched.email
												? formik.errors.email
												: null
										}
										value={formik.values.email}
										onChange={formik.handleChange}
										placeholder="Email"
										name="email"
									/>
									<Input
										message={
											formik.errors.message && formik.touched.message
												? formik.errors.message
												: null
										}
										long={true}
										value={formik.values.message}
										onChange={formik.handleChange}
										placeholder="Message"
										name="message"
									/>
									<div className="contact-modal__submit-wrapper">
										<button type="submit" className="link link-primary">
											Send
										</button>
									</div>
								</form>
							</div>
							<div className="contact-modal__textline">
								<AnimatedTextLine />
							</div>
						</div>
					</Scrollbars>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export default ContactModal;
