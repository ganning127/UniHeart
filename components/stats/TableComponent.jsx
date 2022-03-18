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
    Button,
    Icon,
    Box,
    Heading
} from '@chakra-ui/react';
import * as jsonexport from "jsonexport/dist"
import React, { useState, useEffect } from 'react';
import { BsDownload } from 'react-icons/bs'

export const TableComponent = ({ data }) => {
    let dataArr = Array.from(data);
    let tableKeys = Object.keys(dataArr[0]);
    const handleLabExport = async () => {
        console.log('exporting...')
        jsonexport(dataArr, function (err, csv) {
            if (err) return console.error(err);
            const csvFile = new Blob([csv], { type: 'text/csv' });
            let downloadLink = document.createElement("a");
            downloadLink.download = 'lab.csv';
            downloadLink.href = window.URL.createObjectURL(csvFile);
            downloadLink.style.display = "none";

            document.body.appendChild(downloadLink);
            downloadLink.click();
        });
    }



    return (
        <>
            <Box d='flex' alignItems='center' mb={4}>
                <Heading d='inline'></Heading>

                <Heading
                    lineHeight={1.1}
                    fontWeight="black"
                    fontSize={{ base: '3xl', sm: '4xl' }}>
                    <Text
                        as={'span'}
                        color={'red.400'}
                        position={'relative'}>
                        Lab
                    </Text>
                    <Text as={'span'} ml='4' >
                        Predictions
                    </Text>
                </Heading>
                <Button onClick={handleLabExport} ml='4'>Export as CSV</Button>
            </Box>
            <Table variant='simple'>
                <TableCaption>History of Heart Disease Predictions</TableCaption>
                <Thead>
                    <Tr>
                        {tableKeys.map((key, index) => (
                            <Th key={index}>{key}</Th>
                        ))}
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