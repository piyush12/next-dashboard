"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Box from "@/components/Shared/Box";
import Button from "@/components/Shared/Button";
import Checkbox from "@/components/Shared/Checkbox";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import NavLink from "@/components/Shared/Link";
import Text from "@/components/Shared/Text";
import TextField from "@/components/Shared/TextField";

import { LoginFormData, SignInSchema } from "./validation";

function Login({
  onFormSubmit,
}: {
  onFormSubmit: (data: LoginFormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    onFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="4" direction="column" className="mt-6">
        <Flex direction="column" gap="2">
          <Label htmlFor="email">Email or Username</Label>
          <TextField type="text" id="email" {...register("email")} />
          {errors && errors.email?.message && (
            <Text as="p" variant="helper" color="error">
              {errors.email.message}
            </Text>
          )}
        </Flex>

        <Flex direction="column" gap="2">
          <Label htmlFor="password">Password</Label>
          <TextField type="password" id="password" {...register("password")} />
          {errors && errors.password?.message && (
            <Text as="p" variant="helper" color="error">
              {errors.password.message}
            </Text>
          )}
        </Flex>

        <Flex align="center" justify="between">
          <Checkbox id="remember">Remember me</Checkbox>
          <NavLink href="/forgot-password">Forgot password</NavLink>
        </Flex>

        <Box>
          <Button variant="default" fullwidth type="submit">
            Login
          </Button>
        </Box>
        <Box className="mt-2 text-center">
          <Text as="p" variant="body1">
            New on our platform?{" "}
            <NavLink as={Link} href="/signup">
              Create an account
            </NavLink>
          </Text>
        </Box>
      </Flex>
    </form>
  );
}

export default Login;
