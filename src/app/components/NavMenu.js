import * as React from 'react';

import Link from 'next/link';

import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';

import { OptionZeroLogo } from './Logo';

const menuItems = [
    { title: 'Services', anchor: '#services-section' },
    { title: 'About Us', anchor: '#about-section' },
    { title: 'Reviews', anchor: '#reviews-section' },
];

const StyledMenu = styled.button`
    display: flex;
    border: 0;
    color: white;
    background-color: transparent;
`;

const HamburgerMenu = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'flex-end',
            }}
        >
            <StyledMenu onClick={handleOpenNavMenu}>
                <MenuIcon />
            </StyledMenu>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item} onClick={handleCloseNavMenu}>
                        <Link href={item.anchor}>
                            <Typography textAlign="center">{item.title}</Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};
const ExpandedMenu = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
            }}
        >
            {menuItems.map((item) => (
                <Link style={{ textDecoration: 'none' }} href={item.anchor} key={item}>
                    <Button
                        sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                    >
                        {item.title}
                    </Button>
                </Link>
            ))}
        </Box>
    );
};

function ResponsiveAppBar() {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
            }}
        >
            <Toolbar disableGutters sx={{ display: 'flex', margin: '0 40px' }}>
                <OptionZeroLogo />
                <HamburgerMenu />
                <ExpandedMenu />
            </Toolbar>
        </AppBar>
    );
}
export default ResponsiveAppBar;
