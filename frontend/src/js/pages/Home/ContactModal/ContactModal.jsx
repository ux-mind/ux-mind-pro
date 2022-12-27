import React from 'react';
import Title from '../../../components/Title';
import { motion, AnimatePresence } from 'framer-motion';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ModalHeader from '../../../components/ModalHeader/ModalHeader';
import { useFormik } from 'formik';
import Input from '../../../components/Input';
import AnimatedTextLine from '../../../components/AnimatedTextLine/AnimatedTextLine';

const ContactModal = ({ opened, setOpened }) => {
	const formik = useFormik({
		initialValues: { name: '', email: '', message: '' },
		onSubmit: (values) => {
			console.log(values);
			setOpened(false);
		}
	});

	return (
		<AnimatePresence>
			{opened ? (
				<motion.div
					className="modal contact-modal"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<ModalHeader setOpened={setOpened} />
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
										value={formik.values.name}
										onChange={formik.handleChange}
										placeholder="Name"
										name="name"
									/>
									<Input
										type="email"
										value={formik.values.email}
										onChange={formik.handleChange}
										placeholder="Email"
										name="email"
									/>
									<Input
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
