import React, { useCallback, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useParams } from "react-router-dom";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Text from "../components/Text";
import Box from "../components/Box";
import Button from "../components/Button/Button";

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
            <Text textAlign="center" variant="h2">Login</Text>

            <div>
                <form onSubmit={handleSubmit(onLogin)}>
                    {fields.map((field: any) =>
                        <Box my={2} key={field.name}>
                            <Controller

                                name={field.name}
                                control={control}
                                render={({ field: innerField }) => <input fullWidth {...field} {...innerField} />}
                            />
                        </Box>
                    )}

                    <Button fullWidth type="submit">LOGIN</Button>
                </form>
            </div>
        </>
    )
};