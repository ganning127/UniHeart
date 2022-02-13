import Head from 'next/head'
import { NavBar } from '@components/NavBar'
import { HomeLanding } from '@components/Landing/HomeLanding'


export default function Home() {
    return (
        <>
            <Head>
                <title>UniHeart</title>
            </Head>
            <NavBar active='about' />
            <HomeLanding />
        </>
    )
}
