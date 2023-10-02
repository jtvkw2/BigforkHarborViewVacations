// CabinPage.jsx
import * as React from 'react';
import {
  Container, Box, Typography, Button, Paper, Divider, Avatar, Rating
} from '@mui/material';
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";

function CabinPage({ cabin }) {
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

        <Box mt={4}>
          <Typography variant="h4">{cabin.title}</Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <Rating value={cabin.rating} readOnly />
            <Typography ml={1}>{cabin.reviews} reviews</Typography>
          </Box>
        </Box>

        <Divider mt={2} mb={2} />

        <Typography variant="h6">About this space</Typography>
        <Typography variant="body1" mt={2}>
          {cabin.description}
        </Typography>

        <Box mt={4}>
          <Typography variant="h6">Amenities</Typography>
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

        <Box mt={4}>
          <Typography variant="h6">Host</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <Avatar src={cabin.hostImage} />
            <Typography ml={2}>{cabin.hostName}</Typography>
          </Box>
        </Box>

        <Box mt={4}>
          <Button variant="contained" color="primary" size="large" fullWidth>
            Book Now
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default CabinPage;
