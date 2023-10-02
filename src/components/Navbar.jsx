import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CabinIcon from '@mui/icons-material/Cabin';

function ResponsiveAppBar({pages}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

return (
    <AppBar color='transparent'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}> {/* <-- Adjusted here */}
          {/* Desktop Display */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <CabinIcon />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 2, 
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.15rem', // slightly reduced letter spacing
                color: 'black',
                textDecoration: 'none',
              }}
            >
              BigFork Harbor View Vacations
            </Typography>
          </Box>

          {/* Mobile Display */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <CabinIcon />
            <Typography
              variant="subtitle1"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 2, 
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.15rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              BigFork
            </Typography>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ml: 'auto' }} // push to right
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop menu items */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ mx: 1, color: 'black' }}
                component="a"
                href={page.path}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Mobile menu items (in a dropdown) */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Typography 
                  textAlign="center" 
                  component="a"
                  href={page.path}>
                    {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;