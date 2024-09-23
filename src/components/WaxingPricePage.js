import React, { useEffect} from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const ServiceCategory = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'left',
  width: '100%', // Ensure ServiceCategory takes full width of the Grid item
  boxSizing: 'border-box',
}));

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const WaxingPricePage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scrollToTop();
  });
  
  return (
    <Container className="container">
      <Box mt={4} mb={40}>
        <Typography variant="h4" align="center">Waxing Services</Typography>

        {/* Services Price Chart */}
        <Grid container spacing={4} mt={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={7}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" align="center" gutterBottom>
                Waxing
              </Typography>
              <Box
                p={4}
                sx={{
                  textAlign: 'center', // Centering the Box
                  maxWidth: '100%', // Optional: restrict max width if needed
                  margin: '0 auto', // Center the Box horizontally
                }}
              >
                {/* Align items in a flex container */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    '& > *': { // Ensure spacing between each item
                      marginBottom: 1,
                    }
                  }}
                >
                  {[
                    { name: 'Eyebrow', price: '$12' },
                    { name: 'Lip', price: '$10' },
                    { name: 'Chin', price: '$15' },
                    { name: 'Side Burn', price: '$20' },
                    { name: 'Face', price: '$50' },
                    { name: 'Bikini', price: '30+' },
                    { name: 'Brazilian', price: '$50+' },
                    { name: 'Under Arms', price: '$25' },
                    { name: 'Half Arms', price: '$30' },
                    { name: 'Full Arms', price: '$40+' },
                    { name: 'Half Legs', price: '$35+' },
                    { name: 'Full Legs', price: '$50+' },
                    { name: 'Back', price: '$50+' },
                  ].map(({ name, price }) => (
                    <Box 
                      key={name} 
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        width: '100%', 
                        borderBottom: '1px solid #ddd', // Line under each item
                        paddingBottom: 1, // Space between text and line
                        marginBottom: 1 // Space between lines
                      }}
                    >
                      <Typography variant="body1">{name}</Typography>
                      <Typography variant="body1">{price}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </ServiceCategory>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WaxingPricePage;
