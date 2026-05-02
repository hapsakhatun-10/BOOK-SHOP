"use client";

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
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUp = () => {


    const router = useRouter();


    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log({ name, email, password, image });

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        if (!error) {

            router.push("/")

        } else {
            toast.error(error.message)
        }
    };

    return (
        <Card className="border mx-auto w-full max-w-md py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Sign Up</h1>

            <Form
                className="flex w-full max-w-sm mx-auto flex-col gap-4"
                onSubmit={onSubmit}
            >
                <TextField isRequired name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                    <FieldError />
                </TextField>

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
        </Card>
    );
};

export default SignUp;