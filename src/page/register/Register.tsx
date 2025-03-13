import Auth from "../../components/auth/Auth.tsx";
import {Box} from "@mui/material";
import RegisterForm from "./components/form/RegisterForm.tsx";

const Register = () => {
    return (
        <Box sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Auth title='ثبت نام' children={<RegisterForm title='ثبت نام' navigate="/"/>}/>
        </Box>
    )
}

export default Register;