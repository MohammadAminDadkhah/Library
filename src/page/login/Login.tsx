import {Box} from "@mui/material";
import Auth from "../../components/auth/Auth.tsx";
import LoginForm from "./components/form/LoginForm.tsx";

const Login = () =>
    (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
            <Auth title='ورود' children={<LoginForm navigate='register' title='ورود'/>}/>
        </Box>
    )

export default Login;