import Head from 'next/head'
import { NavBar } from '@components/NavBar'
import { HomeLanding } from '@components/Landing/HomeLanding'
import { Sidebar } from '@components/Sidebar'
import { Container, Text } from '@chakra-ui/react'
import { HeadingWithDesc } from '@components/Headings/HeadingWithDesc'
import { TextSep } from '@components/Separators/TextSep'
import { Bmi } from '@components/Forms/Bmi'


export default function BmiCalc() {
    return (
        <>
            <Head>
                <title>BMI Calculator - UniHeart</title>
            </Head>
            <Sidebar active='about'>
                <Container maxW='container.lg' p={4}>
                    <Bmi />

                </Container>

            </Sidebar>
        </>
    )
}
