import React, { useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import ServicesInfo from "./ServicesInfo";
import Picture from "./Picture";

const index = () => {
	const { register, handleSubmit, errors } = useForm();
	const submitBtn = useRef(null);
	const onSubmit = (data) => {
		console.log(data);
	};
	const sub = () => {
		submitBtn.current.submit();
	};
	return (
		<Container>
			<Form id="form" onSubmit={handleSubmit(onSubmit)}>
				<PersonalInfo register={register} />
				<ContactInfo register={register} />
				<ServicesInfo register={register} />
				<Picture register={register} />
			</Form>

			<Button form="form" type="submit">
				حفظ البيانات
			</Button>
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	width: 85%;
	height: 100%;
	display: flex;
	flex-direction: row-reverse;
	flex-wrap: wrap;
	margin: 10px;
`;
const Button = styled.button`
	order: 5;
	width: 185px;
	height: 66px;
	background: #3fbc8f;
	border: none;
	box-shadow: 0px 4px 16px rgba(102, 102, 102, 0.15);
	border-radius: 4px;
	color: black;
	font-size: 24px;
	&:focus {
		outline: none;
	}
`;
export default index;
