import Head from 'next/head'
import { NavBar } from '@components/NavBar'
import { HomeLanding } from '@components/Landing/HomeLanding'
import { Sidebar } from '@components/Sidebar'
import { Container, Text } from '@chakra-ui/react'
import { HeadingWithDesc } from '@components/Headings/HeadingWithDesc'
import { TextSep } from '@components/Separators/TextSep'


export default function Home() {
    return (
        <>
            <Head>
                <title>Prevention - UniHeart</title>
            </Head>
            <Sidebar active='prevention'>
                <Container maxW='container.lg' p={4}>
                    <HeadingWithDesc align='left'>
                        Exercise
                    </HeadingWithDesc>
                    <Text fontWeight={350}>
                        Numerous studies have shown that exercise is extremely important in the assessment of cardiovascular health. Physically active individuals have a lower risk of coronary cardiovascular disease (CDH). Even if CHD does develop, it tends to be less severe in fit individuals. In the United States, lack of physical activity is attributed to 250,000 deaths per year. Even mid-age individuals who increase their activity level reap these benefits and see a decreased risk in mortality. According to the American Heart Association (AHA), the five biggest determining factors for cardiovascular disease include high blood pressure, abnormal values for blood lipids, smoking, and obesity. Consistent exercise lowers these risk factors substantially. For example, exercise helps with weight loss and can therefore lower blood pressure. Exercise can also reduce low-density lipoprotein (“bad” cholesterol) levels and increase high-density lipoprotein (“good” cholesterol) levels.
                    </Text>

                    <TextSep />

                    <HeadingWithDesc align='left'>
                        Diets
                    </HeadingWithDesc>
                    <Text fontWeight={350}>
                        Numerous studies have shown that exercise is extremely important in the assessment of cardiovascular health. Physically active individuals have a lower risk of coronary cardiovascular disease (CDH). Even if CHD does develop, it tends to be less severe in fit individuals. In the United States, lack of physical activity is attributed to 250,000 deaths per year. Even mid-age individuals who increase their activity level reap these benefits and see a decreased risk in mortality. According to the American Heart Association (AHA), the five biggest determining factors for cardiovascular disease include high blood pressure, abnormal values for blood lipids, smoking, and obesity. Consistent exercise lowers these risk factors substantially. For example, exercise helps with weight loss and can therefore lower blood pressure. Exercise can also reduce low-density lipoprotein (“bad” cholesterol) levels and increase high-density lipoprotein (“good” cholesterol) levels.
                    </Text>

                    <TextSep />

                    <HeadingWithDesc align='left'>
                        Excessive Weight
                    </HeadingWithDesc>
                    <Text fontWeight={350}>
                        Excess weight is also a contributing factor that contributes to cardiovascular disease and other cardiovascular-related issues. In a study of over 1 million women, researchers discovered that an increase in BMI is linked with an increased risk incident of coronary heart disease. After the age of 20, Middle-age people who gained 11 to 22 pounds were three times more likely to develop cardiovascular disease. However, just pure numbers on a scale do not tell the full story. Height is also heavily correlated with weight. BMI is a tool that researchers devised that also takes height into account. It is computed by dividing weight in kilograms by height in meters squared. Below is a BMI chart:
                    </Text>
                </Container>

            </Sidebar>
        </>
    )
}
