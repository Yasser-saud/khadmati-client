import styled from 'styled-components'

const Icons = ({icon}) => {
    return (
        <Wrapper>
            {icon}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #C4C4C4;
    box-shadow: 0px 4px 16px rgba(102, 102, 102, 0.15), inset 0px 4px 9px rgba(0, 0, 0, 0.15), inset 0px 4px 9px rgba(0, 0, 0, 0.15);
`

export default Icons
