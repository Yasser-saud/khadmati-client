import styled from 'styled-components'
import Close from '../svg/cancel.svg'
const Alert = ({msg, color}) => {
    return (
        <Wrapper color={color}>
            <CloseBtn>
                <Close />
            </CloseBtn>
            {msg}
        </Wrapper>
    )
}

const Wrapper = styled.div(props => ({
    background: props.color,
    width: "100%",
    height: "53px",
    marginBottom: "14px",
    borderRadius: "4px",
    boxShadow: "0px 4px 16px rgba(102, 102, 102, 0.15)",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    
}))

const CloseBtn = styled.div`
    width: 25px;
    height: 25px;
    position: absolute;
    left: 3%;
`

export default Alert
