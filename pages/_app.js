import {createGlobalStyle} from "styled-components"
import Head from "next/head"
import axios from "axios"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {persistor, store} from "../store/persistor"

axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://localhost:5000"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffffff;
	background-color: #ffffff;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='99' height='99' viewBox='0 0 200 200'%3E%3Cpolygon fill='%235c73f2' fill-opacity='0.01' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Tajawal';
    position: relative;
    min-height: 100vh;
    padding-bottom: 100px;
  }
  a{
    text-decoration: none;
    color: black;
  }
  p{
    margin: 0;
  }
`

export default function App({Component, pageProps}) {
	return (
		<>
			<Head>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
					crossorigin="anonymous"
				></link>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tajawal" />
			</Head>

			<GlobalStyle />

			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</>
	)
}
