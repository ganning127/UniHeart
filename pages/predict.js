import Head from 'next/head'
import { Sidebar } from '@components/Sidebar'
import { modelPredict, transformData } from '../lib/HeartModel.js'
import { Model } from '@components/Forms/Model.jsx'


export default function Home() {



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
