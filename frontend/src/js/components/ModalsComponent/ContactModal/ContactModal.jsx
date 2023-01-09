import React from 'react';
import Title from '../../Title';
import { motion, AnimatePresence } from 'framer-motion';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ModalHeader from '../../ModalHeader/ModalHeader';
import { useFormik } from 'formik';
import Input from '../../Input';
import AnimatedTextLine from '../../AnimatedTextLine/AnimatedTextLine';
import { basicSchema } from '../../../schemas';

import { useDispatch, useSelector } from 'react-redux';
import { toggleContactModal } from '../../../redux/reducers/modalsReducer';

const ContactModal = () => {
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

	return (
		<motion.div className={`modal contact-modal ${opened ? 'modal_opened' : ''}`}>
			<ModalHeader setOpened={() => dispatch(toggleContactModal())} />
			<Scrollbars>
				<div className="contact-modal__wrapper">
					<div className="container">
						<div className="contact-modal__title">
							<Title size="s">
								Let's discuss your project and&nbsp;find creative solutions
							</Title>
						</div>
						<form className="contact-modal__form" onSubmit={formik.handleSubmit}>
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
	);
};

export default ContactModal;
