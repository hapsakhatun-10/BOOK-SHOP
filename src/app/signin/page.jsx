"use client";

import { Icon } from "@iconify/react";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import Link from "next/link";

const SignIn = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSign = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
        });

        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <Card className=" mx-auto w-full max-w-md py-10 ">

            <h1 className="text-center text-2xl font-bold">Sign In</h1>

            <Form
                className="flex w-full max-w-sm mx-auto flex-col gap-4"
                onSubmit={onSubmit}
            >

                <TextField isRequired name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField isRequired minLength={8} name="password" type="password">
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be 8+ chars, 1 uppercase, 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>

            </Form>

            <Button
                onClick={handleGoogleSign}
                className="w-full mt-4"
                variant="tertiary"
            >
                <Icon icon="devicon:google" />
                Sign in with Google
            </Button>


            <p className="text-center text-sm mt-4 text-gray-600">
                Dont have an account?{" "}
                <Link href="/signup" className="text-blue-500 underline">
                    Sign Up
                </Link>
            </p>

        </Card>
    );
};

export default SignIn;