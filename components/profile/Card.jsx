import styled from "styled-components"
import ProfPic from "../svg/user-solid.svg"
import Icons from "./Icons"
import React from "react"
const Card = () => {
	return (
		<CardContainer>
			<Picture>
				<ProfPicWrapper>
					<ProfPic />
				</ProfPicWrapper>
			</Picture>

			<UserNameContainer>ياسر سعود القثامي</UserNameContainer>

			<hr />
			<InputFields>
				<p>---:المدينة</p>
				<p>---:المنطقة</p>
			</InputFields>

			<Contact>تواصل معي</Contact>

			<IconsWrapper>
				<Icons />
				<Icons />
				<Icons />
			</IconsWrapper>
		</CardContainer>
	)
}

const CardContainer = styled.div`
	width: 447px;
	height: 676px;
	background: #fff;
	border-radius: 24px;
	filter: drop-shadow(0px 4px 16px rgba(102, 102, 102, 0.15));
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	hr {
		width: 90%;
	}

	@media screen and (max-width: 700px) {
		width: 350px;
	}
`

const Picture = styled.div`
	width: 181.89px;
	height: 181.89px;
	background: #d5d5d5;
	border-radius: 50%;
	filter: drop-shadow(0px 4px 16px rgba(102, 102, 102, 0.15));
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin-bottom: 30px;
`
const ProfPicWrapper = styled.div`
	width: 100px;
`

const UserNameContainer = styled.div`
	width: 100%;
	height: 67px;
	text-align: center;
	font-size: 33px;
	margin-bottom: 25px;
`
const InputFields = styled.div`
	width: 100%;
	text-align: right;
	padding: 22px;
	font-size: 24px;
`

const Contact = styled.div`
	width: 100%;
	height: 30px;
	text-align: center;
	font-size: 24px;
	margin-bottom: 20px;
`

const IconsWrapper = styled.div`
	display: flex;
	width: 50%;
	justify-content: space-evenly;
	align-items: center;
`
export default Card
