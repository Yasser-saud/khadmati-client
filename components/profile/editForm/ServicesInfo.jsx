import React, { useState } from "react";
import styled from "styled-components";

const ServicesInfo = ({ register }) => {
	const [isChecked, setIsChecked] = useState();

	return (
		<Container>
			<p>الخدمات التوفرة لديك</p>
			<Wrapper checked={isChecked}>
				<label>توصيل طلاب</label>
				<input
					checked={isChecked}
					onChange={() => setIsChecked(!isChecked)}
					type="checkbox"
					name="whatsapp"
					ref={register}
				/>
			</Wrapper>

			<Wrapper>
				<label>توصيل معلمات</label>
				<input type="checkbox" name="whatsapp" ref={register} />
			</Wrapper>

			<Wrapper>
				<label>مندوب توصيل</label>
				<input type="checkbox" name="whatsapp" ref={register} />
			</Wrapper>

			<Wrapper>
				<label>مدرس خاص</label>
				<input type="checkbox" name="whatsapp" ref={register} />
			</Wrapper>

			<Wrapper>
				<label>مدرس خاص</label>
				<input type="checkbox" name="whatsapp" ref={register} />
			</Wrapper>

			<Wrapper>
				<label>مدرس خاص</label>
				<input type="checkbox" name="whatsapp" ref={register} />
			</Wrapper>
		</Container>
	);
};
const Container = styled.div`
	order: 2;
	padding: 10px 20px;
	width: 374px;
	height: 464px;
	border: 0.5px solid #afafaf;
	box-sizing: border-box;
	border-radius: 14px;
	display: flex;
	flex-direction: column;
	margin-left: 30px;
	p {
		text-align: center;
		font-size: 24px;
		margin-bottom: 10px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	padding: 0 10px;
	background: #dbdbdb;
	border-radius: 4px;
	margin-bottom: 20px;
	position: relative;
	overflow: hidden;
	&input:checked {
		background: blue;
	}
`;

export default ServicesInfo;
