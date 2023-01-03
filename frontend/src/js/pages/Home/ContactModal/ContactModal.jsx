import React from 'react';
import Title from '../../../components/Title';
import { motion, AnimatePresence } from 'framer-motion';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ModalHeader from '../../../components/ModalHeader/ModalHeader';
import { useFormik } from 'formik';
import Input from '../../../components/Input';
import AnimatedTextLine from '../../../components/AnimatedTextLine/AnimatedTextLine';
import { basicSchema } from '../../../schemas';
import useFetch from '../../../hooks/useFetch';

const ContactModal = ({ opened, setOpened, attributes }) => {
	const formik = useFormik({
		initialValues: { name: '', email: '', message: '' },
		validationSchema: basicSchema,
		onSubmit: (values) => {
			console.log(values);
			setOpened(false);
		}
	});

	const data = useFetch(
		'http://localhost:1337/api/modal-form?&populate=%2A',
		{}
	);

	if (data.data) {
		const attributes = data.data.data.attributes;
		
		return (
			<motion.div className={`modal contact-modal ${opened ? 'modal_opened' : ''}`}>
				<ModalHeader setOpened={setOpened} />
				<Scrollbars>
					<div className="contact-modal__wrapper">
						<div className="container">
							<div className="contact-modal__title">
								<Title size="s" dangerouslySetInnerHTML={{ __html: attributes.title }}></Title>
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
									placeholder={attributes.name_input_placeholder}
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
									placeholder={attributes.email_input_placeholder}
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
									placeholder={attributes.message_input_placeholder}
									name="message"
								/>
								<div className="contact-modal__submit-wrapper">
									<button type="submit" className="link link-primary">
										{attributes.submit_button}
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
	}
};

export default ContactModal;
