import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataContext } from './context/DataContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const DashBoard = () => {
  const navigate = useNavigate();
  const { data } = useContext<any>(DataContext);
  console.log(data);
  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginBottom: '20px',
            }}
          >
            <Button
              color="error"
              variant="contained"
              onClick={() => navigate('/')}
            >
              {' '}
              Log Out
            </Button>
          </Box>
          <Box
            sx={{
              border: '1px solid black',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'flex-start',
              justifyContent: 'space-around',
            }}
          >
            <Typography>{data.firstname}</Typography>
            <Typography>{data.lastname}</Typography>
            <Typography>{data.email}</Typography>
            <Typography>{data.address}</Typography>
            <Typography>{data.gender}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
