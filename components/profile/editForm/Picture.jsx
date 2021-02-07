import React, { useRef } from "react";
import styled from "styled-components";
import UserPic from "../../svg/user-solid.svg";

const Picture = ({ register }) => {
	const InputRef = useRef([]);

	return (
		<Container>
			<input
				type="file"
				name="pic"
				onChange={(e) => console.log(e.target.value)}
				ref={(register, InputRef)}
				placeholder="الصوره"
			/>

			<PicContainer>
				<UserPic />
			</PicContainer>
			<p onClick={() => InputRef.current.click()}>اضغط هنا لرفع صورة</p>
		</Container>
	);
};

const Container = styled.div`
	order: 3;
	width: 255px;
	height: 296px;
	background: #eceef2;
	border: 1px dotted #afafaf;
	border-radius: 14px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	p {
		margin-top: 30px;
		font-size: 17px;
	}
	input {
		/* display: none; */
	}
`;
const PicContainer = styled.div`
	width: 181px;
	height: 181px;
	border-radius: 50%;
	background: #d4d4d4;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.21));
	svg {
		width: 100px;
		color: gray;
	}
`;
export default Picture;
