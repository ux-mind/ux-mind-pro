import * as yup from 'yup';

export const basicSchema = yup.object().shape({
	name: yup.string().required('Name is required'),
	email: yup.string().email('Email is not entered correctly').required('Required')
});
