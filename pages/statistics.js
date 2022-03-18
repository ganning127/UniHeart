import Head from 'next/head'
import { Sidebar } from '@components/Sidebar'
import { Model } from '@components/Forms/Model.jsx'
import { useEffect } from 'react'
import SampleData from '../data/sampleStats.json'
import { TableComponent } from '@components/stats/TableComponent'
import { useState } from 'react'

export default function Statistics() {
    const [tableData, setTableData] = useState('');

    useEffect(() => {
        console.log('hello', localStorage.getItem('uniheart_stats'))

        if (localStorage.getItem('uniheart_login_state') === 'false' || localStorage.getItem('uniheart_login_state') === null) {
            window.location.href = '/login?msg=Please login to predict for heart disease!'
        }

        if (localStorage.getItem('uniheart_stats') == null) {
            console.log("here")
            localStorage.setItem('uniheart_stats', JSON.stringify(SampleData))
            setTableData(SampleData);
        }
        else {
            setTableData(JSON.parse(localStorage.getItem('uniheart_stats')));
        }
    }, []);

    return (
        <>
            <Head>
                <title>Statistics - UniHeart</title>
            </Head>
            <Sidebar active='statistics'>
                <TableComponent data={tableData} />

            </Sidebar>
        </>
    )
}


/*
Structure of the previous prediction data (stored in localstorage)
[
    {
        "date": "2020-04-01",
        "type": "lab",

    }
]
*/
