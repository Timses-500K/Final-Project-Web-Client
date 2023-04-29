import React, { useState } from 'react'
import {
    Box,
    Heading,
    Text,
    Input,
    Stack,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useColorModeValue,
    Checkbox,
    CheckboxGroup,
    Image,
} from '@chakra-ui/react'
import Link from 'next/link'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [keepSignedIn, setKeepSignedIn] = useState(false)

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleKeepSignedInChange = (values) => {
        setKeepSignedIn(!values)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Handle submit logic here
        // Clear form fields

        console.log({
            email,
            password,
        });
        setEmail('')
        setPassword('')

    }

    const inputBorderColor = useColorModeValue('gray.300', 'whiteAlpha.300')
    // const buttonBgColor = useColorModeValue('brand.primary', 'gray.700')
    const buttonColor = useColorModeValue('white', 'white')


    return (
        <Box
            maxW="sm"
            mx="auto"
            mt="10"
            p="6"
        //   borderRadius="md"
        //   borderWidth="1px"
        //   borderColor={inputBorderColor}
        >
            <Image my={6} mx="auto" width={'50px'} src="https://s3.nikecdn.com/unite/app/953/images/swoosh_black_2x.png" alt="Logo" />
            <Heading mb="6" textAlign="center" fontSize="2xl" fontWeight="semibold">
                {'YOUR ACCOUNT FOR EVERYTHING NIKE'.toUpperCase()}
            </Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing="6">
                    <FormControl isRequired>
                        {/* <FormLabel>Email</FormLabel> */}
                        <Input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={handleEmailChange}
                            borderColor={inputBorderColor}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        {/* <FormLabel>Password</FormLabel> */}
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            borderColor={inputBorderColor}
                        />
                    </FormControl>
                    {error && (
                        <Box mt="2">
                            <FormErrorMessage>{error}</FormErrorMessage>
                        </Box>
                    )}
                    <CheckboxGroup colorScheme="green" defaultValue={[]}>
                        <Stack direction="row" justifyContent="space-between">
                            <Box>
                                <Checkbox value={keepSignedIn} onChange={handleKeepSignedInChange}>
                                    <Text fontSize="sm">Keep me signed in</Text>
                                </Checkbox>
                            </Box>
                            <Box>
                                <Text fontSize="sm">
                                    <a href="#">Forgotten your password?</a>
                                </Text>
                            </Box>
                        </Stack>
                        <Text p={2} mb="6" textAlign="center" color="gray.500" fontSize="sm">
                            By logging in, you agree to Nike's Privacy Policy and Terms of Use.
                        </Text>
                    </CheckboxGroup>
                    <Button
                        type="submit"
                        size="lg"
                        fontSize="md"
                        fontWeight="semibold"
                        bg={"black"}
                        color={buttonColor}
                        _hover={{ bg: 'brand.primary', color: 'white' }}
                    >
                        SIGN IN
                    </Button>
                    <Text mb="6" textAlign="center" color="gray.500" fontSize="sm">
                        Not a Member?{' '}
                        <Link href="/register">
                            Join Us
                        </Link>
                    </Text>
                </Stack>
            </form>
        </Box>
    )
}

export default LoginForm
