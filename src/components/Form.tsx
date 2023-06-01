import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("Name", { maxLength: 80 })} />
            <select {...register("Industry", { required: true })}>
                <option value="Bienes raices">Bienes raices</option>
                <option value=" diseno"> diseno</option>
                <option value=" fotografia"> fotografia</option>
            </select>
            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

            <input type="submit" />
        </form>
    )
}

export default Form;