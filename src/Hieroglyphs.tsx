import { Box, Typography } from "@mui/material";

export default function Hieroglyphs(props: any) {
    const { value } = props;

    return (
        <>
            <Box className='w-1/2'>
                <Box className='flex items-center flex-col'>
                    <Typography variant='h4'>
                        Hieroglyphs
                    </Typography>
                    {value}
                </Box>
            </Box>
        </>
    )
}