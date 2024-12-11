"use client";

import Box from "@/components/Shared/Box";
import Button from "@/components/Shared/Button";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import NavLink from "@/components/Shared/Link";
import Text from "@/components/Shared/Text";
import TextField from "@/components/Shared/TextField";
import Link from "next/link";
import { SignUpFormData, SignUpSchema } from "./validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function RegisterComponent({
  onFormSubmit,
}: {
  onFormSubmit: (data: SignUpFormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    onFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="4" direction="column" className="mt-6">
        <Flex direction="column" gap="2">
          <Label htmlFor="name">Name</Label>
          <TextField type="text" id="name" {...register("name")} />
          {errors && errors.name?.message && (
            <Text as="p" variant="helper" color="error">
              {errors.name.message}
            </Text>
          )}
        </Flex>

        <Flex direction="column" gap="2">
          <Label htmlFor="email">Email</Label>
          <TextField type="text" id="email" {...register("email")} />
          {errors && errors.email?.message && (
            <Text as="p" variant="helper" color="error">
              {errors.email.message}
            </Text>
          )}
        </Flex>
        <Flex direction="column" gap="2">
          <Label htmlFor="username">Username</Label>
          <TextField type="text" id="username" {...register("username")} />
          {errors && errors.username?.message && (
            <Text as="p" variant="helper" color="error">
              {errors.username.message}
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

        <Flex direction="column" gap="2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <TextField
            type="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          {errors && errors.confirmPassword?.message && (
            <Text as="p" variant="helper" color="error">
              {errors.confirmPassword.message}
            </Text>
          )}
        </Flex>

        <Box>
          <Button variant="default" fullwidth type="submit">
            Signup
          </Button>
        </Box>
        <Box className="mt-2 text-center">
          <Text as="p" variant="body1">
            Already have an account?{" "}
            <NavLink as={Link} href="/login">
              Login
            </NavLink>
          </Text>
        </Box>
      </Flex>
    </form>
  );
}

export default RegisterComponent;
