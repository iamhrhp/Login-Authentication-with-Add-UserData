import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios';
import { DataContext } from './context/DataContext';
import { useNavigate } from 'react-router-dom';

const UserData = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const { id, data, setData } = useContext<any>(DataContext);

  const [firstname, setFirstName] = useState<any>('');
  const [lastname, setLastName] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [address, setAddress] = useState<any>('');
  const [gender, setGender] = useState<any>('');

  const handleUpdate = async () => {
    handleToggle();
    try {
      const body = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        gender: gender,
      };
      const res = await axios.put(
        `https://radiant-anchorage-95660.herokuapp.com/user/update/${id}`,
        body
      );
      const resJson = res.data;
      console.log(resJson);
      setData(resJson);
      localStorage.setItem('state', JSON.stringify(data));
      console.log(data);
      navigate('/dash');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Box sx={{ marginTop: '20px' }}>
      <Grid container>
        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
        <Grid item lg={10} md={10} sm={10} xs={10}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Typography
                sx={{
                  color: '#161A1D',
                  fontFamily: 'Bai Jamjuree',
                  fontWeight: '600',
                  fontSize: '26px',
                }}
              >
                Update Details
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <TextField
                placeholder="Search..."
                sx={{ marginRight: '10px' }}
              ></TextField>
              <Button
                sx={{
                  bgcolor: '#94CD00',
                  color: '#ffffff',
                  '&:hover': {
                    bgcolor: '#ffffff !important',
                    color: '#94CD00 !important',
                    fontweight: '800',
                  },
                }}
              >
                ADD NEW PRODUCT
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
      </Grid>

      <Box
        sx={{
          margin: 'auto',
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          justifyContent: 'center',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <TextField
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          sx={{ marginTop: '10px' }}
        ></TextField>
        <TextField
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          sx={{ marginTop: '10px' }}
        ></TextField>
        <TextField
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginTop: '10px' }}
        ></TextField>
        <TextField
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          sx={{ marginTop: '10px' }}
        ></TextField>
        <TextField
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          sx={{ marginTop: '10px' }}
        ></TextField>

        <Button
          variant="contained"
          sx={{ marginTop: '20px' }}
          onClick={handleUpdate}
        >
          Submit
        </Button>
      </Box>
      <Grid container>
        <Grid item lg={2} md={2} sm={6} xs={12}>
          <Typography
            sx={{
              bgcolor: 'red',
              color: 'white',
              fontStyle: 'Bai Jamjuree',
              fontWeight: '600',
              fontSize: '20px',
            }}
          >
            Name
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={6} xs={12}>
          <Typography
            sx={{
              bgcolor: 'red',
              color: 'white',
              fontStyle: 'Bai Jamjuree',
              fontWeight: '600',
              fontSize: '20px',
            }}
          >
            Product Id
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={6} xs={12}>
          <Typography
            sx={{
              bgcolor: 'red',
              color: 'white',
              fontStyle: 'Bai Jamjuree',
              fontWeight: '600',
              fontSize: '20px',
            }}
          >
            Quantity
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={6} xs={12}>
          <Typography
            sx={{
              bgcolor: 'red',
              color: 'white',
              fontStyle: 'Bai Jamjuree',
              fontWeight: '600',
              fontSize: '20px',
            }}
          >
            Status
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={6} xs={12}>
          <Typography
            sx={{
              bgcolor: 'red',
              color: 'white',
              fontStyle: 'Bai Jamjuree',
              fontWeight: '600',
              fontSize: '20px',
            }}
          >
            Price
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={6} xs={12}>
          <Typography
            sx={{
              bgcolor: 'red',
              color: 'white',
              fontStyle: 'Bai Jamjuree',
              fontWeight: '600',
              fontSize: '20px',
            }}
          >
            Discount Price
          </Typography>
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

export default UserData;
