import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navigation = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: '#fff',
      textDecoration: 'none',
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important',
      },
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none !important',
      },
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'right !important',
      },
    },
    dropDown: {
      textDecoration: 'none',
      color: '#000',
    },
  });

  const { navItem, navIcon, navItemContainer, navLogo, dropDown } = useStyle();

  const [state, setState] = React.useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: 'start' }}
              className={navLogo}
            >
              Bikesmith
            </Typography>
            <Box className={navItemContainer}>
              <Link to="/" className={navItem}>
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/allProducts" className={navItem}>
                <Button color="inherit">All Products</Button>
              </Link>
              <Link to="/dashboard" className={navItem}>
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Link to="/login" className={navItem}>
                <Button color="inherit">Login</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            <Box sx={{ width: 250 }} role="presentation">
              <List>
                <ListItem button>
                  <ListItemText>
                    <Link className={dropDown} to="/">
                      Home
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link className={dropDown} to="allProducts">
                      All Products
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link className={dropDown} to="dashboard">
                      Dashboard
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link className={dropDown} to="login">
                      Login
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
