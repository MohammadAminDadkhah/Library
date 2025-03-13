import {JSX} from "react";
import {Card} from "@mui/material";
import AuthHeader from "./components/AuthHeader.tsx";

type Props = {
    title: string;
    children: JSX.Element;
}

const Auth = ({title, children}: Props) =>
    (
        <Card sx={{
            width: '25%',
            padding: '1rem',
            paddingBlock: '4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '40px',
            gap: 5,
        }}>
            <AuthHeader title={title}/>
            {children}
        </Card>
    );

export default Auth;
