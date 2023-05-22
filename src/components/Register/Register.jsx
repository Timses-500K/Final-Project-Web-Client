import React, { useState } from "react";
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

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [errors, setErrors] = useState("");
  const [username, setUsername] = useState("");

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
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submit logic here

    const validationErrors = {
      firstName: validateName(firstName),
      lastName: validateName(lastName),
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

    console.log({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      birthdate,
    });

    // Clear form fields
    // setFirstName('')
    // setLastName('')
    // setEmail('')
    // setPassword('')
    // setConfirmPassword('')
  };

  const validateName = (value) => {
    const regex = /^[a-zA-Z]+$/;
    if (!value) {
      return "This field is required";
    }
    if (!regex.test(value)) {
      return "Please enter a valid name";
    }
    return "";
  };

  const inputBorderColor = useColorModeValue("gray.300", "whiteAlpha.300");
  const buttonBgColor = useColorModeValue("brand.primary", "gray.700");
  const buttonColor = useColorModeValue("white", "white");

  return (
    <Box maxW="sm" mx="auto" p="6">
      <Image
        my={6}
        mx="auto"
        width={"50px"}
        src="https://s3.nikecdn.com/unite/app/953/images/swoosh_black_2x.png"
        alt="Logo"
      />
      <Heading mb="6" textAlign="center" fontSize="2xl" fontWeight="semibold">
        {"BECOME A NIKE MEMBER".toUpperCase()}
      </Heading>
      <Text p={2} mb="6" textAlign="center" color="gray.500" fontSize="sm">
        Create your Nike Member profile and get first access to the very best of
        Nike products, inspiration and community.
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing="6">
          <FormControl isRequired isInvalid={!!errors.firstName}>
            {/* <FormLabel>First Name</FormLabel> */}
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
            {/* <FormLabel>Last Name</FormLabel> */}
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
            {/* <FormLabel>Username</FormLabel> */}
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
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
          <FormControl isRequired>
            {/* <FormLabel>Confirm Password</FormLabel> */}
            <Input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              borderColor={inputBorderColor}
            />
          </FormControl>
          <FormControl isRequired>
            {/* <FormLabel>Birthdate</FormLabel> */}
            <Input
              type="date"
              placeholder="Birthdate"
              value={birthdate}
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
            _hover={{ bg: buttonBgColor }}
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
