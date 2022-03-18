import Head from 'next/head'
import { Sidebar } from '@components/Sidebar'
import { Model } from '@components/Forms/Model.jsx'
import { useState, useEffect } from 'react'

export default function Home() {
    const [msg, setMsg] = useState('')

    useEffect(() => {
        if (localStorage.getItem('uniheart_login_state') === 'false') {
            window.location.href = '/login?msg=Please login to predict for heart disease!'
        }
    }, [])

    return (
        <>
            <Head>
                <title>Predict - UniHeart</title>
            </Head>
            <Sidebar active='predict'>
                <Model />


            </Sidebar>
        </>
    )
}
