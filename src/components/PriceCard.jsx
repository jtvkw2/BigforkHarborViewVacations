import { Card, CardContent, Typography, Box } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function PriceCard({ pricePerNight }) {
  return (
    <Card elevation={5} sx={{ maxWidth: 250, textAlign: 'center', backgroundColor: '#f5f0e6' }}>
      <CardContent>
        <StarBorderIcon fontSize="large" color="primary" />
        <Typography variant="h5" gutterBottom>
          Per Night
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="baseline">
          <Typography variant="h3" color="primary">
            ${pricePerNight}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PriceCard;
