
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Box from './Box';
import TextField from './TextField/TextField';
import Button from './Button/Button';

export interface FormField {
    type: 'text' | 'select';
    name: string;
    label: string;
    disabled?: boolean;
    options?: string[];
}

export interface Props {
    fields: FormField[];
}

const Form: FC<Props> = ({ fields }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log(errors);

    return (
        <Box mt={4} as="form" onSubmit={handleSubmit(onSubmit)}>
            {fields.map(field => {
                let Component: any = null;
                switch (field.type) {
                    case 'text':
                        Component = (props: any) => <TextField {...props} />;
                        break;
                    case 'select':
                        Component = (props: any) => (<TextField select {...props}>

                        </TextField>);
                        break;
                }

                return (
                    <Box my={3} key={field.name}>
                        <Controller
                            name={field.name}
                            control={control}
                            render={({ field: innerField }) => <Component {...field} {...innerField} />}
                        />

                    </Box>
                );
            })}
            <Box mt={4}>
                <Button variant='primary' type="submit">Save</Button>

            </Box>
        </Box>
    )
}

export default Form;