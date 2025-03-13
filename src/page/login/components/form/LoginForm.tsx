import {Box, Button, InputLabel, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {LoginType} from "../../types/loginTypes.ts";
import {Link, useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import authService from "../../../../services/authService.ts";

type Props = {
    title: string;
    navigate: string;
}

const LoginForm = ({title, navigate}: Props) => {
    const routerNavigate = useNavigate();
    const {handleSubmit, register, formState: {errors}} = useForm();

    const {mutate, isPending} = useMutation({
        mutationFn: async (values: LoginType) => authService.login(values),
        mutationKey: ['login'],
        onSuccess: () => {
            routerNavigate('/');
        }
    })

    return (
        <form onSubmit={handleSubmit((data) => mutate(data as LoginType))}
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

            <Button type="submit" variant="contained" fullWidth size='large' loading={isPending}
                    sx={{fontSize: 18, marginBlockStart: 2, borderRadius: 4}}>
                {title}
            </Button>

            <Link style={{position: 'absolute', bottom: -50, right: 0, textDecoration: "none"}} to={navigate}>
                {navigate === '/register' ? 'حساب کاربری دارید؟' : '!ایجاد حساب کاربری'}
            </Link>
        </form>
    )
}

export default LoginForm;