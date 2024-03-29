import * as yup from "yup"

export const schema = yup.object().shape({
	fullName: yup
		.string()
		.required("الرجاء تعبأة الخانه")
		.min(3, "اقل عدد احرف 3")
		.max(30, "اقصى عدد احرف 30"),
	district: yup
		.string()
		.required("الرجاء تعبأة الخانه")
		.min(3, "اقل عدد احرف 3")
		.max(40, "اقصى عدد احرف 40"),
	city: yup
		.string()
		.required("الرجاء تعبأة الخانه")
		.min(3, "اقل عدد احرف 3")
		.max(20, "اقصى عدد احرف 20"),
	services: yup
		.array()
		.min(1, "الراجاء اختيار خانة واحده على الاقل")
		.required("الرجاء تعبأة الخانه"),
	twitterAcc: yup.string().max(20, "اقصى عدد احرف 20"),
	instagramAcc: yup.string().max(20, "اقصى عدد احرف 20"),
	whatsappAcc: yup.string().max(13, "اقصى عدد ارقام 13"),
})
