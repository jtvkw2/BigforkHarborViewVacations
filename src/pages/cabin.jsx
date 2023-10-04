// CabinPage.jsx
import * as React from 'react';
import {
  Container, Box, Typography, Button, Paper, Card, CardContent, Grid, Divider, Avatar, Rating
} from '@mui/material';
import Slider from 'react-slick';
import Lightbox from "yet-another-react-lightbox";
import SleepCard from '../components/SleepCard';
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import PriceCard from '../components/PriceCard'
import Contact from '../pages/contact'


function CabinPage({ cabin }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: false,
  };

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const toggleOpen = function(state) {
    return function() {
      setOpen(state);
    };
  };

  const updateIndex = function({ index: current }) {
    setIndex(current);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Box mt={6}>
          <Lightbox
            index={index}
            slides={cabin.images}
            plugins={[Inline]}
            on={{
              view: updateIndex,
              click: toggleOpen(true),
            }}
            carousel={{
              padding: 0,
              spacing: 0,
              imageFit: "cover",
            }}
            inline={{
              style: {
                width: "100%",
                maxWidth: "900px",
                aspectRatio: "3 / 2",
                margin: "0 auto",
              },
            }}
          />

          <Lightbox
            open={open}
            close={toggleOpen(false)}
            index={index}
            slides={cabin.images}
            on={{ view: updateIndex }}
            animation={{ fade: 0 }}
            controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
          />
        </Box>
        
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Box mt={4}>
              <Typography variant="h2" textAlign={'left'}>{cabin.title}</Typography>
              <Typography variant="h4" textAlign={'left'}>{cabin.subtitle}</Typography>
              <Box display="flex" alignItems="center" mt={3} mb={2}>
                <Rating value={cabin.rating} readOnly />
                <Typography ml={3}>{cabin.reviews} reviews</Typography>
              </Box>
              <Typography variant="h6" textAlign={'left'} fontWeight={500}>
                {cabin.num_guests + " guests · " + cabin.num_bedrooms + " bedrooms · " + cabin.num_beds + " beds · " + cabin.num_baths + " baths"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%" mt={2}>
              <PriceCard pricePerNight={cabin.amount_per_night} />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{mt: 5, mb: 5}}/>

        <Typography variant="h4" textAlign={'left'}>About this space</Typography>
        <Typography variant="body1" mt={2}>
          {cabin.description}
        </Typography>

        <Box mt={4}>
          <Typography variant="h4" textAlign={'left'}>Amenities</Typography>
          <Box mt={2} display="flex" flexWrap="wrap">
            {cabin.amenities.map((amenity, index) => (
              <Box key={index} mr={2} mb={2}>
                <Paper variant="outlined" style={{ padding: '5px 10px' }}>
                  {amenity}
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider mt={2} mb={2} />

        <Box mt={4}>
          <Typography variant="h4" mb={2} textAlign={'left'}>Where You'll Sleep</Typography>
          <Slider {...settings}>
            {cabin.sleepingArrangements.map((room, idx) => (
              <SleepCard key={idx} room={room} />
            ))}
          </Slider>
        </Box>

        <Divider mt={5} mb={5} />
        
        <Box mt={4}>
          <Typography variant="h6" textAlign={'left'}>Host</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <Avatar src={cabin.hostImage} />
            <Typography ml={2}>{cabin.hostName}</Typography>
          </Box>
        </Box>

        <Contact />
      </Container>
    </div>
  );
}

export default CabinPage;
