import { Box, Button, MenuItem, Select, TextField } from '@mui/material';
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

export interface FormField {
    type: 'text' | 'select';
    name: string;
    label: string;
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
        <Box component="form" sx={
            {
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }
        } onSubmit={handleSubmit(onSubmit)}>
            {fields.map(field => {
                let Component: any = null;
                switch (field.type) {
                    case 'text':
                        Component = (props: any) => <TextField {...props} />;
                        break;
                    case 'select':
                        Component = (props: any) => (<TextField select {...props}>
                            {field.options?.map(option => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>);
                        break;
                }

                return (
                    <div key={field.name}>
                        <Controller
                            name={field.name}
                            control={control}
                            render={({ field: innerField }) => <Component {...field} {...innerField} />}
                        />

                    </div>
                );
            })}

            <Button size='large' variant='contained' type="submit">Save</Button>
        </Box>
    )
}

export default Form;