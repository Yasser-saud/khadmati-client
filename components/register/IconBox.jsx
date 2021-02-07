import styled from 'styled-components'


const IconBox = ({icon, focus}) => {

    return (
        <IconBoxWrapper checked={focus}>
            <Circle />
            <Icon>
                {icon}
            </Icon>
        </IconBoxWrapper>
    )
}

const IconBoxWrapper = styled.div`
    width: 43px;
    height: 39px;
    background: ${props => props.checked ? "red" : "#525252"};
    box-shadow: 0px 4px 16px rgba(102, 102, 102, 0.15);
    border-radius: 4px 0px 0px 4px;
    position: relative;
    
`
const Circle = styled.div`
    width: 31px;
    height: 31px;
    border-radius:50%;
    background: #C4C4C4;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
`

const Icon = styled.div`
    width: 21px;
    height: 21px;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;

`

export default IconBox
