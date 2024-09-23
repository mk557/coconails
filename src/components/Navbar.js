import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo-no-background.png'; // Adjust the path to your logo
import '../styles/Navbar.css'; // Import the CSS file

const Navbar = ({ onOpenLocationModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="navbar-toolbar">
        {/* Mobile Hamburger Menu */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="mobile-menu-icon"
          onClick={toggleMobileMenu}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-buttons-container desktop-menu">
          <Button color="inherit" component={Link} to="/" className="navbar-buttons">
            Home
          </Button>
          <Button
            color="inherit"
            aria-controls="services-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="navbar-buttons"
          >
            Services
          </Button>
          <Menu
            id="services-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/manicure" onClick={handleClose}>
              Manicure
            </MenuItem>
            <MenuItem component={Link} to="/pedicure" onClick={handleClose}>
              Pedicure
            </MenuItem>
            <MenuItem component={Link} to="/waxing" onClick={handleClose}>
              Waxing
            </MenuItem>
            <MenuItem component={Link} to="/reflexology" onClick={handleClose}>
              Reflexology
            </MenuItem>
          </Menu>
          <Button color="inherit" component={Link} to="/contact" className="navbar-buttons">
            Contact Us
          </Button>
          <Button color="inherit" onClick={onOpenLocationModal} className="navbar-buttons">
            Location
          </Button>
        </div>

        {/* Mobile Drawer Menu */}
        <IconButton
  edge="start"
  color="inherit"
  aria-label="menu"
  className="mobile-menu-icon"
  onClick={toggleMobileMenu}
  sx={{
    color: '#000000', // Set hamburger icon color to black
  }}
>
  <MenuIcon />
</IconButton>
        <Drawer
          anchor="left"
          aria-label="menu"
          className="mobile-menu-icon" // This class controls its visibility in different screen sizes        
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
        >
          <List className="mobile-menu">
            <ListItem button component={Link} to="/" onClick={toggleMobileMenu}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/manicure" onClick={toggleMobileMenu}>
              <ListItemText primary="Manicure" />
            </ListItem>
            <ListItem button component={Link} to="/pedicure" onClick={toggleMobileMenu}>
              <ListItemText primary="Pedicure" />
            </ListItem>
            <ListItem button component={Link} to="/waxing" onClick={toggleMobileMenu}>
              <ListItemText primary="Waxing" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={toggleMobileMenu}>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button onClick={() => { onOpenLocationModal(); toggleMobileMenu(); }}>
              <ListItemText primary="Location" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
