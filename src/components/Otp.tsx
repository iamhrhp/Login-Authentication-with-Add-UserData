import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useContext, useEffect } from 'react';
import otppic from '../images/otp.png';
import logo from '../images/logo.png';
import reload from '../images/reload.png';
import OtpInput from 'react-otp-input';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './context/DataContext';

const Register = () => {
  const { mobile, data, setData, setId, id, setMobile } =
    useContext<any>(DataContext);
  const [otp, setOtp] = useState<any>('');
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const [count, setCount] = useState<number>(60);
  const navigate: any = useNavigate();
  const endpoint: any = process.env.REACT_APP_API_VERIFY;
  const endpoint_resend: any = process.env.REACT_APP_API_RESEND;
  //Post Method_______________________

  const getVerification = async () => {
    handleToggle();
    try {
      var body = {
        mobile: mobile,
        otp: otp,
      };
      const res = await axios.post(endpoint, body);
      const resJson = await res.data;
      console.log(resJson);
      setData(resJson);
      setId(resJson.id);
      console.log(id);
      console.log(data, 'data set');
      if (res.status == 200) {
        if (resJson.profileUpdated === true) {
          navigate('/dash');
        } else {
          navigate('/user');
        }
      } else {
        alert('something went wrong');
      }
    } catch (e) {
      alert('Enter Valid Otp');
    }
  };
  const resendOtp = async () => {
    try {
      var body = {
        mobile: mobile,
      };
      const res = await axios.post(endpoint_resend, body);
      const resJson = await res.data;
      console.log(resJson);
      if (count == 0) {
        setCount(60);
      }
    } catch (e) {
      alert('Enter Valid Number');
    }
  };

  useEffect(() => {
    if (!count) return;
    const timeCount = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearInterval(timeCount);
  }, [count]);

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
              Verification
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
              Enter The OTP Sent To
            </Typography>

            <Box
              sx={{
                display: 'flex',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              <OtpInput
                numInputs={4}
                value={otp}
                onChange={(e: any) => setOtp(e)}
                inputStyle={{ padding: 10, marginLeft: 10, marginRight: 10 }}
              ></OtpInput>
            </Box>
            <Typography
              sx={{
                color: 'red',
                fontWeight: '600',
                // fontFamily: 'Bai Jamjuree ',
              }}
            >
              SEC {count}
            </Typography>
            <Box
              sx={{
                // textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                // marginLeft: '20px',
                // alignItems: 'center',
              }}
            >
              <Button
                sx={{
                  color: 'black',
                  fontWeight: '600',
                  fontFamily: 'Montserrat Alternates !important',
                }}
                disabled={true ? count > 0 : false}
                onClick={resendOtp}
              >
                Resend OTP
              </Button>
              <img
                src={reload}
                style={{ height: '25px', width: '25px', marginLeft: '10px' }}
              />
            </Box>
            <Box sx={{ marginTop: '10px' }}>
              <Button
                variant="contained"
                sx={{ bgcolor: 'red', borderRadius: '20px', width: '200px' }}
                onClick={getVerification}
              >
                Verification
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
              <img
                src={otppic}
                style={{
                  maxWidth: '400px',
                  width: '100%',
                  borderRadius: '20px',
                }}
              />
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
