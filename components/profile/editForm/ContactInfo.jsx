import React from "react";
import styled from "styled-components";

const ContactInfo = ({ register }) => {
	return (
		<Container>
			<p>بيانات التواصل</p>
			<label>Twitter / حساب التويتر</label>
			<input type="name" name="twitter" ref={register} placeholder="@user123" />

			<label>Instagram / حساب الانستقرام</label>
			<input type="name" name="twitter" ref={register} placeholder="@user123" />

			<label>WhatsApp / رقم الواتس اب</label>
			<input type="name" name="twitter" ref={register} placeholder="0512345678" />
		</Container>
	);
};

const Container = styled.div`
	/* margin: 10px 0; */
	order: 4;
	width: 374px;
	height: 357px;
	border: 0.5px solid #afafaf;
	box-sizing: border-box;
	border-radius: 14px;
	display: flex;
	flex-direction: column;
	padding: 10px 20px;

	p {
		text-align: center;
		font-size: 24px;
		margin-bottom: 10px;
	}
	label {
		margin-bottom: 10px;
		text-align: right;
	}
	input {
		margin-bottom: 20px;
		border: none;
		outline: none;
		text-align: right;
		background: white;
		height: 40px;
		font-size: 13px;
		filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.15));
		border-radius: 4px;
		padding: 0 10px;
		&:valid {
			border: 0.5px blue;
		}
	}
`;
export default ContactInfo;
