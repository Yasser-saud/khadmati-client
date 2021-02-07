import React, { useState,useRef } from 'react'
import styled from 'styled-components'
import IconBox from './IconBox'
import EmailIcon from '../svg/envelope.svg'
import KeyIcon from '../svg/key.svg'
import Link from 'next/link'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/router'
import axios from 'axios'

const Form = () => {
    const router = useRouter();
    const {register, errors, handleSubmit, watch} = useForm();
    const password = useRef()
    password.current = watch("password", "")
    const [error, setError] =  useState('')
    const [checked , setChecked] = useState(false)


    const onSubmit = async ({email, password}) => {
        const payload = {email, password}
        try {
            const res = await axios.post("/api/user/register", payload)
            router.push("/")
        } catch (error) {
            if(error.response){
                const msg = error.response.data.msg
                setError(msg)
            }
            
        }
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error}
            <InputWrapper >
                <IconBox focus={checked} icon={<EmailIcon/>}/>
                <input onClick={() => setChecked(!checked)} type="email" name="email" placeholder="البريد الإلكتروني" ref={register}/>
            </InputWrapper>

            <InputWrapper>
                <IconBox icon={<KeyIcon/>}/>
                <input
                name="password"
                type="password"
                placeholder="كلمة المرور"
                ref={register({
                required: "You must specify a password",
                minLength: {
                    value: 6,
                    message: "كلمة المرور يجب ان تكون من 6 احرف او ارقام"
                }
                })}
                />
            </InputWrapper>
            {errors.password && <p>{errors.password.message}</p>}

            <InputWrapper>
                <IconBox icon={<KeyIcon/>}/>
                <input
                name="password_repeat"
                type="password"
                placeholder="تأكيد كلمة المرور"
                ref={register({
                validate: value =>
                    value === password.current || "كلمة المرور غير مطابقة"
                })}
            />
            </InputWrapper>
            {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

            <Disclaimer>بالتسجيل، أنت تؤكد أنك قد قرأت ووافقت على <Link href="/"><a>شروط الاستخدام</a></Link> و <Link href="/"><a>سياسة الخصوصية</a></Link> الخاصة بنا</Disclaimer> 
            <Submit >تسجيل</Submit>
            <Login >اضغط <Link href="/login"><a>هنا</a></Link> لتسجيل الدخول</Login>
        </form>
    )
}

const InputWrapper = styled.div`
    display: flex;
    input{
        width: 312px;
        height: 39px;
        border-radius: 0px 4px 4px 0px;
        outline: none;
        border: none;
        margin-bottom: 12px;
        font-size: 14px;
        filter: drop-shadow(0px 4px 16px rgba(102, 102, 102, 0.15));
        text-align: right;
        font-family: inherit;
        transition: 0.2s ease-in;
        padding: 0 10px ;
        &:focus div{
            background: green;
        }
    }
`
const Disclaimer = styled.p`
    font-size: 8px;
    line-height: 10px;
    text-align: right;
    margin-bottom: 13px;
`

const Submit = styled.button`
    width: 355px;
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
const Login = styled.p`
    font-size: 13px;
    line-height: 16px;
    text-align: right;
`

export default Form
