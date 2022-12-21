import { Container, Typography, Box } from '@mui/material';
import Featured from '../components/home/Featured';
import Hero2 from '../components/home/Hero2';

const Home = () => {
    return (

        <>
            <Container>
                <Box component="header"
                    height={300}
                    backgroundsize="cover"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography variant='h1'>Hello World!</Typography>
                </Box>
                <Featured />
            </Container>
            <Hero2 />
        </>

    );
}

export default Home;