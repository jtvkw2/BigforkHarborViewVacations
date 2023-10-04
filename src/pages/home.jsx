import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CabinImg1 from '/cabin1/1.webp'
import CabinImg2 from '/cabin2/1.webp'

function Home() {
  return (
    <Container maxWidth="xl">
        <Box mt={6} mb={4}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ fontWeight: 600 }}
          >
            Welcome to BigFork Harbor View Vacations
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
          >
            Experience the coziness of Montana in our luxersy condos
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {[
            { img: CabinImg1, title: 'Beautiful Marina Cay Condo on the water', description: 'Entire condo in Bigfork, Montana', path: '/marina-cay' },
            { img: CabinImg2, title: 'Luxury Condo on Flathead Lake', description: 'Entire home in Bigfork, Montana', path: '/flathead-lake' }
          ].map((cabin, idx) => (
            <Paper
              key={idx}
              elevation={3}
              sx={{
                width: { xs: '100%', md: '48%' },
                mb: { xs: 4, md: 0 },
                p: 2,
                m: 5,
                borderRadius: 2,
                background: '#f5f0e6'
              }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <img src={cabin.img} alt={cabin.title} style={{ width: '100%', borderRadius: '5px' }} />
                <Typography variant="h5" mt={2}>
                  {cabin.title}
                </Typography>
                <Typography variant="body1" align="center" mt={1} mb={2}>
                  {cabin.description}
                </Typography>
                <Button variant="contained" href={cabin.path} sx={{ backgroundColor: '#755c4c', color: '#f5f0e6', mb: 2 }}>
                  Learn More
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
  )
}

export default Home
