import { Input, Space, TextError } from '../assets/style/form'

export default function InputComponent({ register, name, type, errors }) {
    return (
        <>
            <label>{name}</label>
            <Input {...register(`${type}`)} placeholder={[name]}/>
            {errors && <TextError>{ errors?.[type]?.message }</TextError>}
            <Space />
        </>
    )
} 
