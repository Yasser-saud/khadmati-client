import React from "react";
import styled from "styled-components";

const PersonalInfo = ({ register }) => {
	return (
		<Container>
			<p>البيانات الشخصية</p>
			<label>الاسم الشخصي</label>
			<input type="name" name="fullName" ref={register} placeholder="مثال: محمد خالد بدر" />

			<label>المنطقة</label>
			<input type="name" name="fullName" ref={register} placeholder="مثال: المنطقة الغربية" />

			<label>المدينة</label>
			<input type="name" name="fullName" ref={register} placeholder="مثال: مكة المكرمة" />
		</Container>
	);
};

const Container = styled.div`
	order: 1;
	width: 374px;
	height: 357px;
	border: 0.5px solid #afafaf;
	box-sizing: border-box;
	border-radius: 14px;
	display: flex;
	flex-direction: column;
	padding: 10px 20px;
	margin-left: 30px;

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
	}
`;

export default PersonalInfo;
