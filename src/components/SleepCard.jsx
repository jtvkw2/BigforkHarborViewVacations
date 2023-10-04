// SleepCard.jsx
import { Card, CardContent, Typography, Box, Icon } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';

function SleepCard({ room }) {
  return (
    <Card elevation={3} sx={{ mb: 2, minWidth: '240px', flexGrow: 1, mr: 10}}>
      <CardContent>
        <Typography variant="h6">{room.name}</Typography>
        {room.beds.map((bed, index) => (
          <Box key={index} display="flex" alignItems="center" mt={1}>
            <HotelIcon /> {/* Representing all beds with this icon, adjust as needed */}
            <Typography variant="body1" ml={1}>
              {bed.count} {bed.type}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

export default SleepCard;
