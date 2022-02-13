import {
    FormControl,
    Text,
    SimpleGrid,
    Input,
    Img,
    VStack,
    StackDivider,
    Textarea,
    Button,
    Box,
    Stack,
    InputGroup,
    InputLeftAddon,
    Collapse
} from '@chakra-ui/react'
import { HeadingWithDesc } from '@components/Headings/HeadingWithDesc';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';


export const Bmi = (props) => {
    const [isOpen, setIsOpen] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const height = document.getElementById('height').value;
        const weight = document.getElementById('weight').value;
        const bmi = (weight / height ** 2).toFixed(2);
        const bg = document.getElementById('bg').style.backgroundColor;

        if (bmi > 35) {

        }

        document.getElementById('bmi').innerText = bmi;
        document.getElementById('bg').style.backgroundColor = '#ffffff'

        setIsOpen(true);

    };

    return (
        <>
            <HeadingWithDesc>
                BMI Calculator
            </HeadingWithDesc>

            <SimpleGrid columns={{ base: '1', md: '2' }} spacing="40px" >
                <Stack spacing={4} maxW='600px'>
                    <InputGroup>
                        <InputLeftAddon fontWeight='semibold'>
                            Height (m)
                        </InputLeftAddon>
                        <Input type='number' placeholder='e.g. 1.58' id='height' />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftAddon fontWeight='semibold'>
                            Weight (kg)
                        </InputLeftAddon>
                        <Input type='number' placeholder='e.g. 60' id='weight' />
                    </InputGroup>
                    <Button onClick={handleSubmit} bg='red.400' color='white.off' fontWeight='bold' _hover={{ bg: 'red.500' }}>Submit</Button>
                </Stack>

                <Box alignSelf='flex-start'>
                    <Collapse in={isOpen} animateOpacity>
                        <Box
                            p='40px'
                            id='bg'
                            mt='4'
                            bg='red.200'
                            rounded='md'
                            shadow='md'
                            color='black.light'
                        >
                            <Text fontSize='2xl' fontWeight='bold'>Your BMI:</Text>
                            <Text id='bmi' fontSize='xl'>BMI</Text>
                        </Box>
                    </Collapse>
                </Box>
            </SimpleGrid >

        </>

    )
}

function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
}
