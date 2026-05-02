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

const SignIn = () => {



    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log({ email, password, });

        const { data, error } = await authClient.signIn.email({

            email,
            password,

            callbackURL: '/'

        });

        if (!error) {
            router.push("/signin")
        } else {
            toast.error(error.message)
        }
    };




    const handleGoogleSign = async () => {

        const { data, error } = await authClient.signIn.social({
            provider: "google",
        });

        if (error) {
            toast.error(error.message)
        }
    }

    return (
        <Card className="border mx-auto w-full max-w-md py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Sign In</h1>

            <Form
                className="flex w-full max-w-sm mx-auto flex-col gap-4"
                onSubmit={onSubmit}
            >

                <TextField
                    isRequired
                    name="email"
                    type="email"
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                >
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
            <Button onClick={handleGoogleSign} className="w-full" variant="tertiary">
                <Icon icon="devicon:google" />
                Sign in with Google
            </Button>
        </Card>
    );
};

export default SignIn;