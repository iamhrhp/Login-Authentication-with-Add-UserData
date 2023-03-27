import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        paddingLeft: { lg: '50px', md: '50px', xs: '20px', sm: '20px' },
        color: 'white',
        Width: '100%',
        boxShadow: '10px',
        marginBottom: { sm: '100px', xs: '100px' },
      }}
    >
      <Toolbar disableGutters>
        <Typography
          sx={{
            display: { xs: 'flex', md: 'flex' },
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: '50%', textAlign: 'center', color: 'black' }}
          />
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: {
              lg: 'flex-start',
              md: 'flex-start',
              sm: 'center',
              xs: 'center',
            },
            textTransform: 'uppercase',
          }}
        >
          Foodhub
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
