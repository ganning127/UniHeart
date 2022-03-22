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
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { modelPredict, transformEnvData, transformLabData } from 'lib/HeartModel';
import { useState } from 'react';

export const EnviroForm = () => {

    // const [chestType, setChestType] = useState('TA');
    // const [exerciseAngina, setExerciseAngina] = useState('N');
    // const [restingECG, setRestingECG] = useState('Normal');
    // const [slope, setSlope] = useState('Flat');
    const [resEnv, setResEnv] = useState('');
    const [statusEnv, setStatusEnv] = useState('success');
    const [submittedEnv, setIsSubmittedEnv] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();


        const ageEnv = document.getElementById('ageEnv').value;
        const genderEnv = document.getElementById('genderEnv').value;
        const heightEnv = document.getElementById('heightEnv').value;
        const weightEnv = document.getElementById('weightEnv').value;
        const smokeEnv = document.getElementById('smokeEnv').value;
        const alcoEnv = document.getElementById('alcoEnv').value;
        const activeEnv = document.getElementById('activeEnv').value;

        const data = {
            "age": ageEnv * 365.25,
            "gender": genderEnv,
            "height": heightEnv * 100,
            "weight": weightEnv,
            "smoke": smokeEnv,
            "alco": alcoEnv,
            "active": activeEnv
        }

        const resEnv = modelPredict("model_env", transformEnvData(data));

        const res_strEnv = resEnv === "1" ? "At risk" : "Not at risk";
        const bgEnv = resEnv === "1" ? "error" : "success";

        let stats = localStorage.getItem('env_uniheart_stats');

        let obj = {
            "age": ageEnv,
            "gender": genderEnv,
            "height": heightEnv,
            "weight": weightEnv,
            "smoke": smokeEnv,
            "alco": alcoEnv,
            "active": activeEnv
        }
        stats = JSON.parse(stats);
        console.log(stats);
        console.log(typeof stats)
        let newObj = {
            "name": "John Doe",
            "date": new Date().toLocaleDateString(),
            "type": "env",
            "enteredData": obj,
            "prediction": res_strEnv
        }

        stats.push(newObj);
        localStorage.setItem('env_uniheart_stats', JSON.stringify(stats));

        setStatusEnv(bgEnv);
        setResEnv(res_strEnv);
        setIsSubmittedEnv(true);


    }

    return (
        <Container maxW='container.lg'>
            <Text fontWeight='bold' mb='4' color='red.400'>
                The environmental prediction can be filled out by everyday users.
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
                    {!submittedEnv && <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                    >
                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Age (years)</FormLabel>
                            <NumberInput step={5} defaultValue={15} min={2} id='ageEnv'>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Sex</FormLabel>
                            <Select id='genderEnv'>
                                <option value='1'>Male</option>
                                <option value='2'>Female</option>
                            </Select>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Height (m)</FormLabel>
                            <NumberInput id='heightEnv' defaultValue={1.75}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Weight (kg)</FormLabel>
                            <NumberInput min={2} defaultValue={60} id='weightEnv'>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Do you smoke?</FormLabel>
                            <Select id='smokeEnv'>
                                <option value='0'>No</option>
                                <option value='1'>Yes</option>
                            </Select>
                        </FormControl>


                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Do you drink alcohol?</FormLabel>
                            <Select id='alcoEnv'>
                                <option value='0'>No</option>
                                <option value='1'>Yes</option>
                            </Select>
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <FormLabel>Are you active?</FormLabel>
                            <Select id='activeEnv'>
                                <option value='0'>No</option>
                                <option value='1'>Yes</option>
                            </Select>
                        </FormControl>

                        <Button color="white" bg="red.400" _hover={{ bg: "red.500" }} type="submit" onClick={handleSubmit}>Submit</Button>
                    </VStack>}
                    {submittedEnv && <Alert
                        status={statusEnv}
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                    >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Prediction: {resEnv}!
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