import React, { useState } from "react";
import { useRouter } from "next/router";
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
    Image,
} from "@chakra-ui/react";
import Link from "next/link";
import Loading from "../Loading/Loading";

const RegisterForm = () => {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birth, setBirthdate] = useState("");
    const [errors, setErrors] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
        setErrors((errors) => ({ ...errors, firstName: validateName(value) }));
    };

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
        setErrors((errors) => ({ ...errors, lastName: validateName(value) }));
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setErrors((errors) => ({
            ...errors,
            password: validatePassword(value, confirmPassword),
        }));
    };

    const handleConfirmPasswordChange = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
        setErrors((errors) => ({
            ...errors,
            password: validatePassword(password, value),
        }));
    };

    const handleBirthdateChange = (event) => {
        setBirthdate(event.target.value);
    };
    const postData = (url, data) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(responseData => {

                // Respon yang diterima dari API setelah mengirim data
                return responseData;
            })
            .catch(error => {
                // Tangani kesalahan
                console.log(error);
            });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = {
            firstName: validateName(firstName),
            lastName: validateName(lastName),
            password: validatePassword(password, confirmPassword),
        };

        setErrors(validationErrors);

        // Check if there are no errors
        if (Object.keys(validationErrors).length === 0) {
            // Handle submit logic here
            // Clear form fields
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setBirthdate("");
        }

        // Rest of your code...
        let payload = {
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword,
            birth,
        }


        try {
            setLoading(true)
            const res = await postData("http://localhost:3001/api/register", payload)
            if (res.data.visibility) {
                // Redirect to login page
                router.push("/login");
            } else if (res.error) {
                // Handle error response
                console.error(res.error);
            }
        } catch (error) {
            // Handle error
            console.error(error);
        } finally {
            // Sembunyikan komponen loading setelah selesai proses registrasi
            setLoading(false);
        }
    };

    const validateName = (value) => {
        const regex = /^[a-zA-Z]+$/;
        if (!value) {
            return "This field is required";
        }
        if (!regex.test(value)) {
            return "Please enter a valid name";
        }
    };

    const validatePassword = (password, confirmPassword) => {
        if (!password) {
            return "Password is required";
        }
        if (password.length < 6) {
            return "Minimal password is 6 characters";
        }
        if (password !== confirmPassword) {
            return "Password and Confirm Password do not match";
        }
    };

    const inputBorderColor = useColorModeValue("gray.300", "whiteAlpha.300");
    const buttonColor = useColorModeValue("white", "white");
    if (loading) {
        return <Loading />;
    }
    return (
        <Box maxW="sm" mx="auto" p="6">
            <Image
                my={6}
                mx="auto"
                width={"50px"}
                src="https://s3.nikecdn.com/unite/app/953/images/swoosh_black_2x.png"
                alt="Logo"
            />
            <Heading
                mb="6"
                textAlign="center"
                fontSize="2xl"
                fontWeight="semibold"
            >
                {"BECOME A NIKE MEMBER".toUpperCase()}
            </Heading>
            <Text p={2} mb="6" textAlign="center" color="gray.500" fontSize="sm">
                Create your Nike Member profile and get first access to the very best
                of Nike products, inspiration and community.
            </Text>
            <form onSubmit={handleSubmit}>
                <Stack spacing="6">
                    <FormControl isRequired isInvalid={!!errors.firstName}>
                        <Input
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            borderColor={inputBorderColor}
                        />
                        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={!!errors.lastName}>
                        <Input
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={handleLastNameChange}
                            borderColor={inputBorderColor}
                        />
                        <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <Input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={handleEmailChange}
                            borderColor={inputBorderColor}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <Input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={handleUsernameChange}
                            borderColor={inputBorderColor}
                        />
                    </FormControl>

                    <FormControl isRequired isInvalid={!!errors.password}>
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            borderColor={inputBorderColor}
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={!!errors.password}>
                        <Input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            borderColor={inputBorderColor}
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <Input
                            type="date"
                            placeholder="Birthdate"
                            value={birth}
                            onChange={handleBirthdateChange}
                            borderColor={inputBorderColor}
                        />
                    </FormControl>
                    {errors && (
                        <Box mt="2">
                            <FormErrorMessage>{errors}</FormErrorMessage>
                        </Box>
                    )}

                    <Text p={2} mb="6" textAlign="center" color="gray.500" fontSize="xs">
                        By creating an account, you agree to Nike's Privacy Policy and Terms
                        of Use.
                    </Text>
                    <Button
                        type="submit"
                        size="lg"
                        fontSize="md"
                        fontWeight="bold"
                        bg={"black"}
                        color={buttonColor}
                        _hover={{ bg: "brand.primary", color: "white" }}
                    >
                        JOIN US
                    </Button>
                    <Text mb="6" textAlign="center" color="gray.500" fontSize="xs">
                        Already a Member? <Link href="/login">Sign In</Link>
                    </Text>
                </Stack>
            </form>
        </Box>
    );
};

export default RegisterForm;
