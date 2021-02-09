import React, {useEffect, useState} from "react"
import styled from "styled-components"
import UserPic from "../../svg/user-solid.svg"

const Picture = ({register}) => {
	const [preview, setPreview] = useState()
	const [selectedFile, setSelecetedFile] = useState()

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined)
			return
		}
		const objectUrl = URL.createObjectURL(selectedFile)
		setPreview(objectUrl)
		return () => {
			URL.revokeObjectURL(objectUrl)
		}
	}, [selectedFile])

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelecetedFile(undefined)
			return
		}
		setSelecetedFile(e.target.files[0])
	}

	return (
		<Container>
			<PicContainer>
				{selectedFile ? <img src={preview} width="185px" height="auto" /> : <UserPic />}
			</PicContainer>
			<input
				type="file"
				name="picture"
				// onChange={onSelectFile}
				onChange={(e) => console.log(e.target.files)}
				ref={register}
				placeholder="الصوره"
				accept="image/*"
			/>
		</Container>
	)
}

const Container = styled.div`
	flex: 35%;
	order: 4;
	width: 255px;
	height: 357px;
	background: #eceef2;
	border: 1px dotted #afafaf;
	border-radius: 14px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 20px;
	p {
		margin-top: 30px;
		font-size: 17px;
	}
	input {
		text-align: center;
		margin-top: 30px;
		width: 220px;
	}
`
const PicContainer = styled.div`
	width: 181px;
	height: 181px;
	border-radius: 70%;
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
`
export default Picture
