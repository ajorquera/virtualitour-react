import React, { useCallback, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useParams } from "react-router-dom";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Text, { Heading } from "../components/Text/Text";
import Box from "../components/Box";
import Button from "../components/Button/Button";
import TextField from "../components/TextField";

interface IFormInput {
    email: string
    password: string
}

const fields: any = [
    {
        type: 'text',
        name: 'email',
        label: 'Email',
    },
    {
        type: 'text',
        name: 'password',
        label: 'Password',
    }
]

export const Login = () => {
    const props = useAuth();
    console.log(props)

    const queryParams = useParams<{ redirect: string }>();
    const onLogin: SubmitHandler<IFormInput> = useCallback(async (data) => {
        try {
            await props.loginWithCredentials(data.email, data.password);

        } catch (e) {
            console.error(e);
        }

    }, [props]);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })


    return (
        <>
            <Heading variant="h1" textAlign="center">Login</Heading>

            <div>
                <form onSubmit={handleSubmit(onLogin)}>
                    {fields.map((field: any) =>
                        <Box my={3} key={field.name}>
                            <Controller

                                name={field.name}
                                control={control}
                                render={({ field: innerField }) => <TextField fullWidth {...field} {...innerField} />}
                            />
                        </Box>
                    )}

                    <Box mt={4}>
                        <Button fullWidth variant="primary-dark" type="submit">LOGIN</Button>
                    </Box>
                </form>
            </div>
        </>
    )
};