import {
    FormControl,
    Text,
    SimpleGrid,
    Input,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
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
import { modelPredict, transformLabData } from 'lib/HeartModel';
import { useState } from 'react';

export const DoctorForm = () => {
    const [chestType, setChestType] = useState('TA');
    const [exerciseAngina, setExerciseAngina] = useState('N');
    const [restingECG, setRestingECG] = useState('Normal');
    const [slope, setSlope] = useState('Flat');
    const [res, setRes] = useState('');
    const [submitted, setIsSubmitted] = useState(false);
    const [status, setStatus] = useState('success');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const age = document.getElementById('age').value;
        const sex = document.getElementById('sex').value;
        // const chestPainType = document.getElementById('chestPainType').value;
        const restingBP = document.getElementById('restingBP').value;
        const cholesterol = document.getElementById('cholesterol').value;
        const fastingBS = document.getElementById('fastingBS').value;
        // const restingECG = document.getElementById('restingECG').value;
        const maxHR = document.getElementById('maxHR').value;
        // const exerciseAngina = document.getElementById('exerciseAngina').value;
        const oldpeak = document.getElementById('oldpeak').value;
        // const sl_slope = document.getElementById('sl_slope').value;

        const data = {
            "Age": age,
            "Sex": sex,
            "ChestPainType": chestType,
            "RestingBP": restingBP,
            "Cholesterol": cholesterol,
            "FastingBS": fastingBS,
            "RestingECG": restingECG,
            "MaxHR": maxHR,
            "ExerciseAngina": exerciseAngina,
            "Oldpeak": oldpeak,
            "ST_Slope": slope,
        }

        const res = modelPredict("model_lab", transformLabData(data));
        console.log(res);
        const res_str = res === "1" ? "At risk" : "Not at risk";
        const bg = res === "1" ? "error" : "success";
        console.log(bg);
        setStatus(bg);
        setRes(res_str);
        setIsSubmitted(true);
    }

    return (
        <Container maxW='container.lg'>
            <Text fontWeight='bold' mb='4' color='red.400'>
                The lab prediction is more technical and relies on data from blood tests.
            </Text>

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
                    {!submitted && <VStack
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
                            <Select id='sex'>
                                <option value='M'>Male</option>
                                <option value='F'>Female</option>
                            </Select>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Chest Pain Type</FormLabel>
                            <RadioGroup onChange={e => setChestType(e)} value={chestType}>
                                <Stack spacing={5} direction='row'>
                                    <Radio colorScheme='red' value='TA'>
                                        Typical Angina
                                    </Radio>
                                    <Radio colorScheme='green' value='ATA'>
                                        ATypical Angina
                                    </Radio>
                                    <Radio colorScheme='blue' value='NAP'>
                                        Non-Anginal Pain
                                    </Radio>

                                    <Radio colorScheme='orange' value='ASY'>
                                        Asymptomatic
                                    </Radio>
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
                            <RadioGroup defaultValue='2' id='restingECG' onChange={e => setRestingECG(e)} value={restingECG}>
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
                            <RadioGroup id='exerciseAngina' onChange={e => setExerciseAngina(e)} value={exerciseAngina}>
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
                            <RadioGroup defaultValue='2' id='sl_slope' onChange={e => setSlope(e)} value={slope}>
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

                        <Button color="white" bg="red.400" _hover={{ bg: "red.500" }} type="submit" onClick={handleSubmit}>Submit</Button>
                    </VStack>}
                    {submitted && <Alert
                        status={status}
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                    >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Prediction: {res}!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm' fontStyle='italic'>
                            Note: UniHeart is not a medical device and does not diagnose or treat conditions.
                        </AlertDescription>
                    </Alert>}
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