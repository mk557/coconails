import React, { useEffect} from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const ServiceCategory = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'left',
  width: '100%',
  // Remove minHeight to allow content to dictate the height
  // Ensure consistent box-sizing
  boxSizing: 'border-box',
}));
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const PedicurePricePage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scrollToTop();
  });
  
  return (
    <Container className="container">
      <Box mt={4} mb={40}>
        <Typography variant="h4" align="center">Pedicure Services</Typography>

        {/* Services Price Chart */}
        <Grid container spacing={4} mt={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={7}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" align="center" gutterBottom>
                Pedicure
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
                    { name: 'Standard Pedicure', price: '$28' },
                    { name: 'Gel Pedicure', price: '$49' },
                    { name: 'Paraffin Pedicure', price: '$35' },
                    { name: 'Keratin Pedicure', price: '$45' },
                    { name: 'Purisma Organic Spa', price: '$75' },
                    { name: 'Eucalyptus Spa', price: '$65' },
                    { name: 'Coco Deluxe Spa', price: '$55' },
                    { name: 'Green Tea Spa', price: '$55' },
                    { name: 'Polish Change', price: '$20' },
                    { name: 'Callus Elimination', price: '$10' },
                    { name: 'Foot Reflexology (10min)', price: '$55' },
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
export default PedicurePricePage;
