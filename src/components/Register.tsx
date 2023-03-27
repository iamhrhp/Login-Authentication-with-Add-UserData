import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useContext } from 'react';
import img from '../images/img.png';
import logo from '../images/logo.png';
import call from '../images/call.png';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './context/DataContext';
const endpoint: any = process.env.REACT_APP_SERVICE_URI;

const Register = () => {
  const { mobile, setMobile } = useContext<any>(DataContext);
  const [open, setOpen] = useState(false); //mui loader
  const handleToggle = () => {
    setOpen(!open);
  };
  const navigate: any = useNavigate();
  //Post Method_______________________End
  console.log(typeof process.env.REACT_APP_SERVICE_URI);
  const getOtp = async () => {
    handleToggle();
    try {
      var body = {
        mobile: mobile,
      };
      const res = await axios.post(endpoint, body);
      const resJson = await res.data;
      console.log(resJson);
      setMobile(resJson.mobile);

      // .then((response) => response.data)
      // .then((data) => console.log(data));
      navigate('./otp');
    } catch (e) {
      alert('Enter Valid Number');
    }
  };
  return (
    <Box
      sx={{ marginTop: { lg: '100px', md: '100px', sm: 'none', xs: 'none' } }}
    >
      <Grid container sx={{}}>
        <Grid item lg={2} md={2} sm={1} xs={1}></Grid>
        <Grid
          item
          lg={3}
          md={3}
          sm={10}
          xs={10}
          sx={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
          }}
        >
          <Box>
            <img src={logo} style={{ width: '50px' }} />
            <Typography
              sx={{
                fontFamily: 'Poppins !important',
                fontSize: '30px !important',
                fontStyle: 'normal',
                fontWeight: '600 !important',
                lineHeight: '45px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: '#000000',
                marginBottom: '10px',
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins !important',
                fontStyle: 'normal',
                fontWeight: '400 !important',
                fontSize: '16px !important',
                lineHeight: '24px',
                display: 'flex',
                color: '#A2A3A5',
                textAlign: 'center',

                marginLeft: '50px',
              }}
            >
              Login Account
            </Typography>

            <Box
              sx={{
                display: 'flex',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              <TextField
                label="Mobile No"
                variant="standard"
                type="number"
                value={mobile}
                sx={{ marginBottom: '20px' }}
                onChange={(e) => setMobile(e.target.value)}
              >
                Mobile No
              </TextField>
              <img
                src={call}
                style={{ width: '10px', height: '10px', margin: 'auto' }}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ bgcolor: 'red', borderRadius: '20px', width: '200px' }}
                onClick={getOtp}
              >
                Get OTP
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={1} md={1}></Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            borderRadius: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              marginTop: { sm: '50px', xs: '50px' },
            }}
          >
            <Box>
              <img src={img} style={{ maxWidth: '600px', width: '100%' }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default Register;
