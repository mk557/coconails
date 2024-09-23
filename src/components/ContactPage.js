import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled component for the map container
const MapContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '400px',
  width: '100%',
  boxSizing: 'border-box',
}));
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scrollToTop();
  });
  
    return (
      <Container className="container">
        <Box mt={4}>
          <Typography variant="h4" align="center">Contact Us</Typography>
          
          <Grid container spacing={4} mt={4}>
            {/* Left Side - Contact Info */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" align="left">Contact Information</Typography>
                <Typography variant="body1" mt={2} align="left">
                  Please call us to make any appointments or message us on social media for any questions about our services.
                </Typography>
                <Typography variant="body1" mt={2} align="left">
                  Email: coconailramsey@gmail.com
                  <br />
                  Phone: (201) 818-8884
                </Typography>
                <Typography variant="h5" mt={4} align="left">Hours</Typography>
                <Typography variant="body1" mt={2} align="left">
                  Mon - Fri: 9:30 AM - 7:00 PM
                  <br />
                  Sat: 9:00 AM - 6:30 PM
                  <br />
                  Sun: 10:00 AM - 5:30 PM
                </Typography>
              </Box>
            </Grid>
          
          {/* Right Side - Google Maps */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" align="center">VISIT COCO NAILS</Typography>

              <Typography variant="body1" align="center" mt={2}>
              25 N Spruce St, Ramsey, NJ 07446
                            </Typography>
              <MapContainer elevation={3}>
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6016.945677736226!2d-74.1410284!3d41.0586559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e15950465947%3A0x1adbd5aa6a10d70!2sCoco%20Nails!5e0!3m2!1sen!2sus!4v1726457783781!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </MapContainer>
            </Box>
          </Grid>
        </Grid>

        {/* Spacer */}
        <Box mt={8} mb={4} /> {/* Adjust mt and mb values to control the space */}
      </Box>
    </Container>
  );
};

export default ContactPage;
