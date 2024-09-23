import React, {useEffect} from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const ServiceCategory = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'left',
  width: '100%',
  // Remove minHeight to allow content to dictate the height
  // Ensure consistent box-sizing
  boxSizing: 'border-box',
}));

const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  // Ensure each grid item takes up equal space
  flexBasis: 'calc(20% - 16px)', // Adjust spacing
  maxWidth: 'calc(20% - 16px)', // Adjust spacing
}));

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const ManicurePricePage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scrollToTop();
  });
  
  return (
    <Container className="container">
      <Box mt={4} mb={40}>
        <Typography variant="h4" align="center">Manicure Services</Typography>

        {/* Services Price Chart */}
        <Grid container spacing={4} mt={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={7}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" align="center" gutterBottom>
                Manicure
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
                    { name: 'Standard Manicure', price: '$15' },
                    { name: 'Buff Manicure', price: '$20' },
                    { name: 'French Manicure', price: '$22' },
                    { name: 'Paraffin Manicure', price: '$29' },
                    { name: 'Keratin Manicure', price: '$29' },
                    { name: 'Scrub Manicure', price: '$27' },
                    { name: 'Polish Change', price: '$12' },
                    { name: 'Repair / 1 nail', price: '$7+' },
                    { name: 'Design', price: '$10' },
                    { name: 'Gel Manicure', price: '$35' },
                    { name: 'French Gel Manicure', price: '$45' },
                    { name: 'Powder Gel Manicure', price: '$49' },
                    { name: 'UV Gel Full Set', price: '$80' },
                    { name: 'UV Gel French Set', price: '$90' },
                    { name: 'UV Gel Extension', price: '$100' },
                    { name: 'UV Fill in', price: '$55' },
                    { name: 'UV French Fill in', price: '$65' },
                    { name: 'LCN UV Gel Set', price: '$100' },
                    { name: 'LCN UV Gel French Set', price: '$110' },
                    { name: 'Powder Gel Full Set', price: '$80' },
                    { name: 'Powder French Set', price: '$90' },
                    { name: 'Powder Extension Set', price: '$100' },
                    { name: 'Powder Gel Fill in', price: '$55' },
                    { name: 'Powder Gel French Fill in', price: '$75' },
                    { name: 'Powder Gel Repair / 1 nail', price: '$10+' },
                    { name: 'Gel X', price: '$63' },
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

export default ManicurePricePage;
