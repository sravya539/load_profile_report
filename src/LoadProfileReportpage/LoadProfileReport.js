import React from 'react';
import { Stack, Button, CssBaseline, AppBar, Toolbar, Typography, Box, TextField, Grid } from '@mui/material';
import Home from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { DTR, Feeder, Section, SubStation } from './Dropdown';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Link } from "@mui/material";
import ResponsiveDateRangePicker from './DateDetails';
import MaterialChart from './SubmitAppScreen';


export default function SelectTextFields() {

  const initialValues = {
    Sections: '',
    SubStation: '',
    Feeder: '',
    DTR: '',
    Meter: '',
    Ifyoualreadyknowthemeternumberpleaseenterhere: '',
    FromDate: '',
    ToDate: ''
  };
  const [values, setValues] = useState(initialValues);
  const clear = () => {
    alert("verified")
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(e.target)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('InputFields', values);
    setValues({
      Sections: '',
      SubStation: '',
      Feeder: '',
      DTR: '',
      Meter: '',
      Ifyoualreadyknowthemeternumberpleaseenterhere: '',
      FromDate: '',
      ToDate: ''
    });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar >
          <Box sx={{ width: '100%', maxWidth: 300 }}>
            <Typography variant='h6' gutterBottom component="div"><Home color="black" /><KeyboardArrowRightIcon />Reports</Typography>
            <Typography variant="h6" gutterBottom component="div">Load Profile Report</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row', }}>
      </Box>
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <TextField
          id="outlined-select-currency-native"
          name="Sections"
          value={values.Sections}
          onChange={handleInputChange}
          select
          label="Sections:"
          SelectProps={{
            native: true,
          }}
        >
          {Section.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          required
          label="Sub Station:"
          SelectProps={{
            native: true,
          }}
          name="SubStation"
          value={values.SubStation}
          onChange={handleInputChange}
        >
          {SubStation.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <TextField
          id="outlined-select-currency-native"
          select
          required
          label="Feeder:"
          SelectProps={{
            native: true,
          }}
          name="Feeder"
          value={values.Feeder}
          onChange={handleInputChange}
        >
          {Feeder.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          required
          label="DTR:"
          SelectProps={{
            native: true,
          }}
          name="DTR"
          value={values.DTR}
          onChange={handleInputChange}
        >
          {DTR.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <TextField
          id="outlined-select-currency-native"
          required
          label="Meter:"
          name="Meter"
          value={values.Meter}
          onChange={handleInputChange}
        ></TextField>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" display="inline">
            If you already know the meter number, please enter here :
          </Typography>
          <TextField
            id="outlined-select-currency-native"
            name="Ifyoualreadyknowthemeternumberpleaseenterhere:"
            required
            value={values.Ifyoualreadyknowthemeternumberpleaseenterhere}
            onChange={handleInputChange}
          ></TextField>
        </div>
      </Grid>
      );
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <TextField
          name="FromDate"
          label="From Date"
          type="date"
          variant="outlined"
          value={values.FromDate}
          onChange={handleInputChange}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          name="ToDate"
          label="To Date"
          type="date"
          variant="outlined"
          value={values.ToDate}
          onChange={handleInputChange}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="contained" onClick={handleSubmit} ><Link href="Chart" color="inherit" underline="none">SUBMIT</Link></Button>
        <Button variant="contained" onClick={clear} >CLEAR</Button>
      </Stack>
      <br />
    </Box>
  );
}