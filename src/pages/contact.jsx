import { Container, Box, Typography, Button } from '@mui/material';

function Contact() {
  const emailAddress = "info@bigforkharborview.com"; // Your email address
  const emailSubject = "Inquiry about BigFork Harbor View Vacations";
  const emailBody = "Hello,\n\nI'm interested in learning more about BigFork Harbor View Vacations. Please provide more details.\n\nThank you.";

  return (
    <div>
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" mb={4}>Contact Us</Typography>
        <Typography variant="body1" mb={3}>
          Interested in booking or need more information? Reach out to us directly via email!
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
        >
          Email Us Now
        </Button>
      </Container>
    </div>
  );
}

export default Contact;