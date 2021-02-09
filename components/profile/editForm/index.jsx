import React from "react"
import styled from "styled-components"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import PersonalInfo from "./PersonalInfo"
import ContactInfo from "./ContactInfo"
import ServicesInfo from "./ServicesInfo"
import Picture from "./Picture"
import {schema} from "./validation"
import {useDispatch, useSelector} from "react-redux"
import {editProfileSelector, submitProfile} from "../../../store/editProfile"
import axios from "axios"

const index = () => {
	const dispatch = useDispatch()
	const {loading, hasErrors, errMessage} = useSelector(editProfileSelector)
	const {register, handleSubmit, errors} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = async (data) => {
		const {
			fullName,
			district,
			city,
			services,
			twitterAcc,
			instagramAcc,
			whatsappAcc,
			Picture,
		} = data
		console.log(data)
		await dispatch(submitProfile({fullName, district, city, services, twitterAcc}))

		if (!hasErrors) {
			console.log("pass")
		}
		console.log(errMessage)
		// try {
		// 	const res = await axios.post("/api/profile/new-profile", {
		// 		fullName,
		// 		district,
		// 		city,
		// 		services,
		// 		twitterAcc,
		// 	})
		// 	console.log(res)
		// } catch (error) {
		// 	console.log(error.response)
		// }
	}

	return (
		<Container>
			<Form id="form" onSubmit={handleSubmit(onSubmit)}>
				<PersonalInfo register={register} errors={errors} />
				<ContactInfo register={register} errors={errors} />
				<ServicesInfo register={register} errors={errors} />
				<Picture register={register} errors={errors} />
			</Form>

			<Button disabled={loading ? "true" : ""} form="form" type="submit">
				{loading ? "دقيقه...." : "حفظ البيانات"}
			</Button>
		</Container>
	)
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Form = styled.form`
	width: 80%;
	height: 100%;
	display: flex;
	flex-direction: row-reverse;
	flex-wrap: wrap;
	justify-content: center;
`
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
`
export default index
