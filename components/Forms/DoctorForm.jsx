import {
    FormControl,
    Text,
    SimpleGrid,
    Input,
    Container,
    VStack,
    Button,
    Box,
    StackDivider,
    Stack, Textarea,
    Tooltip,
    FormLabel,
    InputLeftAddon,
    Collapse,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    Select,
    NumberDecrementStepper, Radio, RadioGroup
} from '@chakra-ui/react'
import { HeadingWithDesc } from '@components/Headings/HeadingWithDesc';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

export const DoctorForm = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    /*
 console.log(
        modelPredict("model_lab", transformData({
            "Age": 38,
            "Sex": "M",
            "ChestPainType": "ASY",
            "RestingBP": 110,
            "Cholesterol": 196,
            "FastingBS": 0,
            "RestingECG": "Normal",
            "MaxHR": 166,
            "ExerciseAngina": "N",
            "Oldpeak": 0,
            "ST_Slope": "Flat",
        })))
*/
    return (
        <Container maxW='container.lg'>
            <Formik
                initialValues={{ name: 'Sasuke' }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        actions.setSubmitting(false)
                    }, 1000)
                }}
            >
                <Form>
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                    >
                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Age (years)</FormLabel>
                            <NumberInput step={5} defaultValue={15} min={2} max={120} id='age'>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Sex</FormLabel>
                            <Select placeholder='sex'>
                                <option value='M'>Male</option>
                                <option value='F'>Female</option>
                            </Select>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Chest Pain Type</FormLabel>
                            <RadioGroup defaultValue='2' id='chestPainType'>
                                <Stack spacing={5} direction='row'>
                                    <Tooltip hasArrow label='Typical Angina'>
                                        <Radio colorScheme='red' value='TA'>
                                            TA
                                        </Radio>
                                    </Tooltip>
                                    <Tooltip hasArrow label='ATypical Angina'>
                                        <Radio colorScheme='green' value='ATA'>
                                            ATA
                                        </Radio>
                                    </Tooltip>
                                    <Tooltip hasArrow label='Non-Anginal Pain'>
                                        <Radio colorScheme='blue' value='NAP'>
                                            NAP
                                        </Radio>
                                    </Tooltip>

                                    <Tooltip hasArrow label='Asymptomatic'>
                                        <Radio colorScheme='orange' value='ASY'>
                                            ASY
                                        </Radio>
                                    </Tooltip>
                                </Stack>
                            </RadioGroup>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Resting Blood Pressure (mmHg)</FormLabel>
                            <NumberInput id='restingBP' defaultValue={80}>
                                <NumberInputField />
                                <NumberInputStepper >
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Cholesterol (mm/dl)</FormLabel>
                            <NumberInput id='cholesterol' defaultValue={100}>
                                <NumberInputField />
                                <NumberInputStepper >
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Fasting Blood Sugar (mg/dl)</FormLabel>
                            <NumberInput id='fastingBS' defaultValue={100}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Resting ECG (mg/dl)</FormLabel>
                            <RadioGroup defaultValue='2' id='restingECG'>
                                <Stack spacing={5} direction='row'>
                                    <Radio colorScheme='red' value='Normal'>
                                        Normal
                                    </Radio>
                                    <Tooltip hasArrow label='having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV)'>
                                        <Radio colorScheme='green' value='ST'>
                                            ST
                                        </Radio>
                                    </Tooltip>
                                    <Tooltip hasArrow label="showing probable or definite left ventricular hypertrophy by Estes' criteria">
                                        <Radio colorScheme='blue' value='LVH'>
                                            LVH
                                        </Radio>
                                    </Tooltip>
                                </Stack>
                            </RadioGroup>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>MaxHR (BPM, between 60-202)</FormLabel>
                            <NumberInput id='maxHR' defaultValue={100}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Exercise Angina (exercise-induced angina)</FormLabel>
                            <RadioGroup defaultValue='2' id='exerciseAngina'>
                                <Stack spacing={5} direction='row'>
                                    <Radio colorScheme='red' value='Y'>
                                        Yes
                                    </Radio>
                                    <Radio colorScheme='red' value='N'>
                                        No
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Oldpeak ST (Integer value measured in depression)</FormLabel>
                            <NumberInput id='oldpeak' defaultValue={1}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>



                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>ST Slope (the slope of the peak exercise ST segment)</FormLabel>
                            <RadioGroup defaultValue='2' id='sl_slop'>
                                <Stack spacing={5} direction='row'>
                                    <Radio colorScheme='red' value='Up'>
                                        Up
                                    </Radio>
                                    <Radio colorScheme='red' value='Down'>
                                        Down
                                    </Radio>
                                    <Radio colorScheme='red' value='Flat'>
                                        Flat
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>



                        <Button color="white" bg="blue.shade" _hover={{ bg: "blue.shade.hover" }} type="submit">Submit</Button>
                    </VStack>
                    <Text bg='red.100' mt='4' p='1' rounded='lg' d='none' id='error'>There was an error, please refresh the page and try again!</Text>
                </Form>
            </Formik>
        </Container >
    )
}

/*
Model Parameters (Pass to transform data in a json object):
        Age: age of the patient [years]
        Sex: sex of the patient [M: Male, F: Female]
        ChestPainType: chest pain type [TA: Typical Angina, ATA: Atypical Angina, NAP: Non-Anginal Pain, ASY: Asymptomatic]
        RestingBP: resting blood pressure [mm Hg]
        Cholesterol: serum cholesterol [mm/dl]
        FastingBS: fasting blood sugar [1: if FastingBS > 120 mg/dl, 0: otherwise]
        RestingECG: resting electrocardiogram results [Normal: Normal, ST: having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV), LVH: showing probable or definite left ventricular hypertrophy by Estes' criteria]
        MaxHR: maximum heart rate achieved [Numeric value between 60 and 202]
        ExerciseAngina: exercise-induced angina [Y: Yes, N: No]
        Oldpeak: oldpeak = ST [Numeric value measured in depression]
        ST_Slope: the slope of the peak exercise ST segment [Up: upsloping, Flat: flat, Down: downsloping]
        HeartDisease: output class [1: heart disease, 0: Normal]
*/