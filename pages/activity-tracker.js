import Head from 'next/head'
import { Sidebar } from '@components/Sidebar'
import { useEffect } from 'react'
import { Formik, Form } from 'formik';
import {
    Container, Text, Button,
    FormControl,
    FormHelperText,
    Input,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    VStack,
    Link,
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
import { useState } from 'react'
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export default function ActivityTracker() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        if (localStorage.getItem('uniheart_login_state') === 'false' || localStorage.getItem('uniheart_login_state') === null) {
            window.location.href = '/login?msg=Please login to use this feature!'
        }
    }, []);

    const sports = [
        "soccer",
        "basketball",
        "tennis",
        "baseball",
        "golf",
        "running",
        "volleyball",
        "badminton",
        "swimming",
        "boxing",
        "table tennis",
        "skiing",
        "ice skating",
        "roller skating",
        "cricket",
        "rugby",
        "pool",
        "darts",
        "football",
        "bowling",
        "ice hockey",
        "surfing",
        "karate",
        "horse racing",
        "snowboarding",
        "skateboarding",
        "cycling",
        "archery",
        "fishing",
        "gymnastics",
        "figure skating",
        "rock climbing",
        "sumo wrestling",
        "taekwondo",
        "fencing",
        "water skiing",
        "jet skiing",
        "weight lifting",
        "scuba diving",
        "judo",
        "wind surfing",
        "kickboxing",
        "sky diving",
        "hang gliding",
        "bungee jumping",
        "other"
    ]

    const handleSubmit = () => {
        console.log('submitting activity tracker...');

        let length = document.getElementById('length').value;
        let intensity = document.getElementById('intensity').value;
        let type = document.getElementById('type').value;
        let hr = document.getElementById('hr').value;
        let notes = document.getElementById('notes').value;

        let actDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

        const obj = {
            actDate, length, intensity, type, hr, notes
        }

        console.log(obj)

    }
    return (
        <>
            <Head>
                <title>Activity Tracker - UniHeart</title>
            </Head>
            <Sidebar active='activity tracker'>
                <Container maxW='container.lg' p={4}>
                    <Formik
                        initialValues={{ name: 'Sasuke' }}
                    >
                        <Form>
                            <VStack
                                divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'
                            >

                                <FormControl isRequired borderRadius="20" color="gray.900">
                                    <FormLabel>Date</FormLabel>
                                    <FormHelperText mb='2'>
                                        The date that you exercised on
                                    </FormHelperText>

                                    <DatePicker onChange={setDate} value={date} />
                                </FormControl>

                                <FormControl isRequired borderRadius="20" color="gray.900">
                                    <FormLabel>Activity Length</FormLabel>
                                    <FormHelperText mb='2'>
                                        The number of minutes that you exercised for today
                                    </FormHelperText>
                                    <NumberInput step={5} defaultValue={30} min={1} id='length'>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>


                                <FormControl isRequired borderRadius="20" color="gray.900">
                                    <FormLabel>Heart Rate During Activity</FormLabel>
                                    <FormHelperText mb='2'>
                                        Your average heart rate during the activity (enter 0 if you don&lsquo;t know)
                                    </FormHelperText>
                                    <NumberInput step={1} defaultValue={100} min={0} max={220} id='hr'>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>

                                <FormControl isRequired borderRadius="20" color="gray.900">
                                    <FormLabel>Activity Intensity</FormLabel>
                                    <FormHelperText mb='2'>
                                        Scale from 1-10, with 1 being the least intense and 10 being the most intense
                                    </FormHelperText>
                                    <NumberInput step={1} defaultValue={1} min={1} max={10} id='intensity'>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>

                                <FormControl isRequired borderRadius="20" color="gray.900">
                                    <FormLabel>Type of Activity</FormLabel>
                                    <FormHelperText mb='2'>
                                        Choose from the list or select &quot;other&quot;
                                    </FormHelperText>
                                    <Select id='type'>
                                        {sports.map((sport, index) => {
                                            return (
                                                <option key={index} value={sport.toLowerCase()}>{sport}</option>
                                            )
                                        }
                                        )}
                                    </Select>
                                </FormControl>

                                <FormControl borderRadius="20" color="gray.900">
                                    <FormLabel>Activity Notes</FormLabel>
                                    <FormHelperText mb='2'>
                                        Any personal notes that you want to add about this activity
                                    </FormHelperText>
                                    <Textarea id='notes' placeholder='Enter any notes here' />
                                </FormControl>


                                <Button color="white" bg="red.400" _hover={{ bg: "red.500" }} type="submit" onClick={handleSubmit}>Submit</Button>

                            </VStack>

                        </Form>
                    </Formik>

                </Container>

            </Sidebar>
        </>
    )
}
