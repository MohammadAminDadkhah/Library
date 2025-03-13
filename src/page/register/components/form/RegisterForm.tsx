import {Box, Button, InputLabel, TextField} from "@mui/material";
import {FieldValue, useForm} from "react-hook-form";
import {RegisterType} from "../../types/registerType.ts";
import {Link} from "react-router-dom";

type Props = {
    title: string;
    navigate: string;
}

const RegisterForm = ({title, navigate}: Props) => {
    const {handleSubmit, register, formState: {errors}} = useForm();

    const onSubmit = (values: FieldValue<RegisterType>) => {
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              style={{display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
                <InputLabel sx={{textAlign: 'right'}}>نام کاربری</InputLabel>
                <TextField
                    {...register("username", {required: "نام کاربری الزامی است"})}
                    variant="outlined"
                    sx={{width: '300px'}}
                    error={!!errors.username}
                />
                {errors.username && <span style={{color: 'red'}}>{String(errors.username?.message)}</span>}
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
                <InputLabel sx={{textAlign: 'right'}}>کلمه عبور</InputLabel>
                <TextField
                    {...register("password", {required: "رمز عبور الزامی است"})}
                    variant="outlined"
                    type="password"
                    sx={{width: '300px'}}
                    error={!!errors.password}
                />
                {errors.password && <span style={{color: 'red'}}>{String(errors.password?.message)}</span>}
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
                <InputLabel sx={{textAlign: 'right'}}>تایید کلمه عبور</InputLabel>
                <TextField
                    {...register("confirmPassword", {required: "رمز عبور الزامی است"})}
                    variant="outlined"
                    type="password"
                    sx={{width: '300px'}}
                    error={!!errors.confirmPassword}
                />
                {errors.confirmPassword && <span style={{color: 'red'}}>{String(errors.confirmPassword?.message)}</span>}
            </Box>

            <Button type="submit" variant="contained" fullWidth size='large'
                    sx={{fontSize: 18, marginBlockStart: 2, borderRadius: 4}}>
                {title}
            </Button>

            <Link style={{position: 'absolute', bottom: -50, right: 0, textDecoration: "none"}} to={navigate}>
                {navigate === '/' ? 'حساب کاربری دارید؟' : '!ایجاد حساب کاربری'}
            </Link>
        </form>
    )
}

export default RegisterForm;