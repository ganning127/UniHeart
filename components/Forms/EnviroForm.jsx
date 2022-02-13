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
    InputGroup,
    InputLeftAddon,
    Collapse
} from '@chakra-ui/react'
import { HeadingWithDesc } from '@components/Headings/HeadingWithDesc';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

export const EnviroForm = () => {
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
                            <Input id='name' placeholder='Name' color="gray.900" />
                        </FormControl>

                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <Input id='email' type="email" placeholder='Email' color="gray.900" />
                        </FormControl>


                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <Input id='subject' placeholder='Subject' color="gray.900" />
                        </FormControl>
                        <FormControl isRequired borderRadius="20" color="gray.900">
                            <Textarea placeholder='Message' rows="5" id="message" />
                        </FormControl>

                        <Button color="white" bg="blue.shade" _hover={{ bg: "blue.shade.hover" }} type="submit">Submit</Button>
                    </VStack>
                    <Text bg='red.100' mt='4' p='1' rounded='lg' d='none' id='error'>There was an error, please refresh the page and try again!</Text>
                </Form>
            </Formik>
        </Container>
    )
}