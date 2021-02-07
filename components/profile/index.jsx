import styled from "styled-components";
import Card from "./Card";
import EditForm from "./editForm/";
import { useState } from "react";

const profile = () => {
	const [edit, setEdit] = useState(false);

	return (
		<div className="container mt-5">
			<ProfileTag>الملف الشخصي</ProfileTag>
			<hr />
			<CardWrapper>
				{edit ? <Card /> : <EditForm />}

				<EditBtn edit={edit} onClick={() => setEdit(!edit)}>
					{edit ? "الغاء" : "تعديل البيانات"}
				</EditBtn>
			</CardWrapper>
		</div>
	);
};

const ProfileTag = styled.h1`
	font-size: 48px;
	text-align: right;
	margin-bottom: 31px;
`;

const CardWrapper = styled.div`
	margin-top: 55px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const EditBtn = styled.div`
	margin-top: 50px;
	width: 185px;
	height: 66px;
	background: ${(props) => (props.edit ? "#EB5353" : "#5C73F2")};
	box-shadow: 0px 4px 16px rgba(102, 102, 102, 0.15);
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	color: white;
	cursor: pointer;
	transition: 0.1s ease-in;

	&:hover {
		filter: brightness(0.9);
	}
`;

export default profile;
