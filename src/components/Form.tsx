
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Box from './Box';
import TextField from './TextField';
import Button from './Button/Button';

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
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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
                    <div key={field.name}>
                        <Controller
                            name={field.name}
                            control={control}
                            render={({ field: innerField }) => <Component {...field} {...innerField} />}
                        />

                    </div>
                );
            })}

            <Button type="submit">Save</Button>
        </Box>
    )
}

export default Form;