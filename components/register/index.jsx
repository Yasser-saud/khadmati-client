import styled from 'styled-components'
import Form from './Form'
import React from 'react'


const index = () => {
    return (
        <Container>

            <Form />
            
        </Container>
    )
}

const Container = styled.div`
    width: 355px;
    height: 254px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: flex-start;
    align-items:flex-end;
    flex-direction: column;
`


export default index
