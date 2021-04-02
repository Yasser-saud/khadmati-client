import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import axios from 'axios';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { RecoilRoot } from 'recoil';

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = 'https://khadmati-full.herokuapp.com';

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.8,
  trickleSpeed: 500,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start({});
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routerChangeError', () => {
  NProgress.done();
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tajawal"
        />
      </Head>

      <GlobalStyle />

      <RecoilRoot>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </>
  );
}

// global style

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fdfdfd;
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
`;
