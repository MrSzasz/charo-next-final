import '@/styles/globals.scss'
import getFirestoreApp from '../../firebase/config'
import { AppContext } from '../../context/AppContext'
import Router from 'next/router'
import { useState, useEffect } from 'react';
import Loader from '@/components/Loading/Loading';

getFirestoreApp()

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
    });

    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    });

    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    });

  }, [Router])

  return (
    <AppContext>
      {isLoading && <Loader/>}
      {/* <Loader/> */}
      <Component {...pageProps} />
    </AppContext>
  )
}
