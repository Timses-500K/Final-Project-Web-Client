import React, { useEffect, useState } from "react";
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
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { getError } from "@/helper/error";
import { useRouter } from "next/router";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const LoginForm = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const toast = useToast;
  const [show, setShow] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (res.error) {
        toast({
          title: res.error,
          status: "error",
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: getError(error),
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleKeepSignedInChange = (values) => {
    setKeepSignedIn(!values);
  };

  const inputBorderColor = useColorModeValue("gray.300", "whiteAlpha.300");
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
              borderColor={inputBorderColor}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            {/* <FormLabel>Password</FormLabel> */}
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: "Please enter password",
                  minLength: {
                    value: 6,
                    message: "Minimal password is 6 characters",
                  },
                })}
                placeholder="Password"
                borderColor={inputBorderColor}
              />
              <InputRightElement>
                <Box cursor="pointer" onClick={() => setShow(!show)}>
                  {show ? <VscEyeClosed /> : <VscEye />}
                </Box>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
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
                  <Link href="#">Forgotten your password?</Link>
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
