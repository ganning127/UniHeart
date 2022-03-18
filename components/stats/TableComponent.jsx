import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Text,
    Heading
} from '@chakra-ui/react';

export const TableComponent = ({ data }) => {
    console.log(data);
    let dataArr = Array.from(data);

    return (
        <>
            <Heading>Lab Prediction</Heading>
            <Table variant='simple'>
                <TableCaption>History of Heart Disease Predictions</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Date</Th>
                        <Th>Prediction</Th>
                        <Th isNumeric>Age</Th>
                        <Th>Sex</Th>
                        <Th>Chest Pain Type</Th>
                        <Th>Resting Blood Pressure</Th>
                        <Th>Cholesterol</Th>
                        <Th>Fasting Blood Sugar</Th>
                        <Th>Resting ECG</Th>
                        <Th>Max Heart Rate</Th>
                        <Th>Exercise Induced Angina</Th>
                        <Th>ST Depression</Th>
                        <Th>Oldpeak</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {dataArr.map((d, index) => {
                        if (d.type !== 'lab') return;
                        return (
                            <Tr key={d.index} bg={d.prediction === 'At risk' ? 'red.100' : 'transparent'}>
                                <Td>{d.date}</Td>
                                <Td >{d.prediction}</Td>
                                <Td>{d.enteredData.Age}</Td>
                                <Td>{d.enteredData.Sex}</Td>
                                <Td>{d.enteredData.ChestPainType}</Td>
                                <Td>{d.enteredData.RestingBP}</Td>
                                <Td>{d.enteredData.Cholesterol}</Td>
                                <Td>{d.enteredData.FastingBS}</Td>
                                <Td>{d.enteredData.RestingECG}</Td>
                                <Td>{d.enteredData.MaxHR}</Td>
                                <Td>{d.enteredData.ExerciseAngina}</Td>
                                <Td>{d.enteredData["ST_Slope"]}</Td>
                                <Td>{d.enteredData.Oldpeak}</Td>

                            </Tr>
                        )
                    })}
                </Tbody>




            </Table>

        </>
    )
}