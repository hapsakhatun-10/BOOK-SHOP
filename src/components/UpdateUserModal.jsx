"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaUser } from "react-icons/fa6";

export function UpdateUserModal() {

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({
            name,
            image,

        });




    };

    return (
        <Modal>
            <Button variant="secondary">(edit profile)</Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">

                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaUser className="size-5" />
                            </Modal.Icon>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface>
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    <TextField name="name">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>


                                    <TextField name="image">
                                        <Label>Image</Label>
                                        <Input placeholder="Enter your image url" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>

                                        <Button type="submit">
                                            Update
                                        </Button>
                                    </Modal.Footer>

                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

export default UpdateUserModal;