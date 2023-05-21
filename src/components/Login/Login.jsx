import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
} from "@chakra-ui/react";
import Link from "next/link";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const submitHandler = ({ email, password }) => console.log(email, password);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleKeepSignedInChange = (values) => {
    setKeepSignedIn(!values);
  };

  // const handleSubmit = (event) => {
  //     event.preventDefault()
  //     // Handle submit logic here
  //     // Clear form fields

  //     console.log({
  //         email,
  //         password,
  //     });
  //     setEmail('')
  //     setPassword('')

  // }

  const inputBorderColor = useColorModeValue("gray.300", "whiteAlpha.300");
  // const buttonBgColor = useColorModeValue('brand.primary', 'gray.700')
  const buttonColor = useColorModeValue("white", "white");

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
      <Image
        my={6}
        mx="auto"
        width={"50px"}
        src="https://s3.nikecdn.com/unite/app/953/images/swoosh_black_2x.png"
        alt="Logo"
      />
      <Heading mb="6" textAlign="center" fontSize="2xl" fontWeight="semibold">
        {"YOUR ACCOUNT FOR EVERYTHING NIKE".toUpperCase()}
      </Heading>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack spacing="6">
          <FormControl isInvalid={errors.email}>
            {/* <FormLabel>Email</FormLabel> */}
            <Input
              type="email"
              id="email"
              {...register("email", {
                required: "Please enter an email",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter a valid email",
                },
              })}
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              borderColor={inputBorderColor}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            {/* <FormLabel>Password</FormLabel> */}
            <Input
              type="password"
              id="password"
              {...register("password", {
                required: "Please enter password",
                minLength: {
                  value: 6,
                  message: "Minimal password is 6 characters",
                },
              })}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              borderColor={inputBorderColor}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          {error && (
            <Box mt="2">
              <FormErrorMessage>{error}</FormErrorMessage>
            </Box>
          )}
          <CheckboxGroup colorScheme="green" defaultValue={[]}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Checkbox
                  value={keepSignedIn}
                  onChange={handleKeepSignedInChange}
                >
                  <Text fontSize="xs">Keep me signed in</Text>
                </Checkbox>
              </Box>
              <Box>
                <Text fontSize="xs">
                  <a href="#">Forgotten your password?</a>
                </Text>
              </Box>
            </Stack>
            <Text
              p={2}
              mb="6"
              textAlign="center"
              color="gray.500"
              fontSize="xs"
            >
              By logging in, you agree to Nike's Privacy Policy and Terms of
              Use.
            </Text>
          </CheckboxGroup>
          <Button
            type="submit"
            size="lg"
            fontSize="md"
            fontWeight="semibold"
            bg={"black"}
            color={buttonColor}
            _hover={{ bg: "brand.primary", color: "white" }}
            isLoading={isSubmitting}
          >
            SIGN IN
          </Button>
          <Text mb="6" textAlign="center" color="gray.500" fontSize="xs">
            Not a Member? <Link href="/register">Join Us</Link>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
