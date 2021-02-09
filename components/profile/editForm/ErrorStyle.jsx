import styled from "styled-components"

const ErrorStyle = ({msg}) => {
	return <Error>{msg}</Error>
}
const Error = styled.p`
	font-size: 13px;
	color: red;
	text-align: right;
	margin-top: -15px;
	margin-bottom: 10px;
`
export default ErrorStyle
