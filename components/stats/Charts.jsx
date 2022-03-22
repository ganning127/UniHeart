import Chart from 'chart.js/auto' // needed for "no tree shaking"
import { Bar, Pie, PolarArea } from 'react-chartjs-2';
import { Heading, Text, Box } from '@chakra-ui/react';

export const Charts = ({ data }) => {
    data = Array.from(data);
    let numberPositive = data.filter(d => d.prediction === "At risk").length;
    let numberNegative = data.filter(d => d.prediction === "Not at risk").length;

    const numData = {
        "labels": [
            "At risk predictions",
            "Not at risk predictions"
        ],
        "datasets": [
            {
                "label": "# of Votes",
                "data": [
                    numberPositive,
                    numberNegative,
                ],
                "backgroundColor": [
                    "#32CD32",
                    "#FF7F7F"
                ]
            }
        ]
    }
    return (
        <Box shadow="lg" p={4} textAlign="center" mt='4' maxW='500px'>
            <Heading color="gray.800" fontSize='2xl'>Total Number of Predictions</Heading>
            <Pie data={numData} />
            <Text mt="4" fontSize="xl">{data.desc}</Text>
        </Box>
    )
}

