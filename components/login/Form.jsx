import styled from 'styled-components'
import IconBox from '../register/IconBox'
import {useForm} from 'react-hook-form'
import EmailIcon from '../svg/envelope.svg'
import KeyIcon from '../svg/key.svg'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'



/////
const Form = () => {

    const router = useRouter();
    const {register, errors, handleSubmit} = useForm();
    const [error, setError] =  useState('')

    const onSubmit = async ({email, password}) => {
        
        try {
            const res = await axios.post("/api/user/login",{email, password})
            router.push("/")
        } catch (error) {
            if(error.response){
                const msg = await error.response.data.msg
                setError(msg)
            }
            else if(error.request){
                console.log(error.request)
            }
            else{
                console.log("ERORR in login", error)
            }
        }
        
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error}
            <InputWrapper >
                <IconBox icon={<EmailIcon/>}/>
                <input type="email" name="email" placeholder="البريد الإلكتروني" ref={register}/>
            </InputWrapper>

            <InputWrapper>
                <IconBox icon={<KeyIcon/>}/>
                <input
                name="password"
                type="password"
                placeholder="كلمة المرور"
                ref={register} />
            </InputWrapper>
            <ForgetPass><Link href="/">نسيت كلمة المرور؟</Link></ForgetPass>
            <Submit >تسجيل الدخول</Submit>
            <Register>اضعط <Link href="/register">هنا</Link> اذا لايوجد لديك حساب</Register>
        </form>
    )
}

const InputWrapper = styled.div`
    display: flex;
    input{
        width: 312px;
        height: 37px;
        border-radius: 0px 4px 4px 0px;
        outline: none;
        border: none;
        margin-bottom: 12px;
        font-size: 14px;
        filter: drop-shadow(0px 4px 16px rgba(102, 102, 102, 0.15));
        text-align: right;
        font-family: inherit;
        transition: 0.2s ease-in;
        
    }
`

const ForgetPass = styled.p`
    font-size: 12px;
    text-align: right;
    margin-top: -8px;
`

const Submit = styled.button`
    width: 100%;
    height: 43px;
    background: #5C73F2;
    box-shadow: 0px 0px 8px rgba(40, 40, 40, 0.33);
    border-radius: 4px;
    outline: none;
    border: none;
    font-size: 24px;
    color: white;
    font-family: inherit;
    padding-bottom: 5px;
    transition: 0.1s;
    cursor: pointer;
    &:hover{
        background: #7a8cf5;
    }
`

const Register = styled.p`
    font-size: 13px;
    line-height: 16px;
    text-align: right;
`
export default Form
