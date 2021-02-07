import styled from 'styled-components'
import Link from 'next/link'
import {useEffect} from 'react'
import NavBar from '../components/nav'


import {useSelector, useDispatch} from 'react-redux'
import {userSelector, fetchUser} from '../store/user'
import axios from 'axios'



const Title = styled.h1`
  font-size: 50px;
  color: black;
`

export default function Home() {
  const {loading, userInfo, hasErrors, errMessage, loggedIn} = useSelector(userSelector)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUser())
  },[dispatch])
  
  return (
    <>
      <NavBar user={userInfo} loading={loading} loggedIn={loggedIn}/>
      <Title>Home</Title>
      {loading && <h1>Loading...</h1>}
      {userInfo != null ? <h1>{userInfo.email}</h1> : "no email"}
    </>
  )
}
