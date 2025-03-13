import {Box, Typography} from "@mui/material";

type Props = {
    title: string;
}

const AuthHeader = ({ title }: Props) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Box component='img' src='logo.svg'/>
        <Typography variant="h5" fontWeight='bold'>
            فرم {title}
        </Typography>
    </Box>
)

export default AuthHeader;