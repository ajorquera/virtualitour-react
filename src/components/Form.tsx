
import React, { FC, ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Box from './Box';
import TextField from './TextField/TextField';
import Button from './Button/Button';
import ImageUpload from './ImageUpload/ImageUpload';
import { Heading } from './Text';

export interface FormField {
    type: 'text' | 'select' | 'image-upload';
    name: string;
    label: string;
    disabled?: boolean;
    options?: string[];
}

export interface Props {
    fields: FormField[];
    footer?: ReactNode
}

const Form: FC<Props> = ({ fields, footer }) => {
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

                    case 'image-upload':
                        Component = (props: any) => (
                            <>
                                <Heading style={{ marginBottom: 10, marginTop: 40 }} variant="h3">{field.label}</Heading>
                                <ImageUpload />
                            </>
                        );
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

            {footer}

            <Box mt={4}>
                <Button variant='primary' type="submit">Save</Button>

            </Box>
        </Box>
    )
}

export default Form;