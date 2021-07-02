import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export default function ProjectSetting() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Project Setting	
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="profileLabel"
            name="profileLabel"
            label="Profile Label"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="profileImage"
            name="profileImage"
            label="Profile Image"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        
        <Grid item xs={3}   >
          <TextField
            required
            id="headingSkills"
            name="headingSkills"
            label="Heading Skills "
            fullWidth
            autoComplete="shipping address-line1"
          />
          
        </Grid>
        <Grid item xs={3}  >
          <TextField
            required
            id="headingSkills"
            name="headingSkills"
            label="Heading Skills "
            fullWidth
            autoComplete="shipping address-line1"
          />
          
        </Grid>
        <Grid item xs={3}  >
          <TextField
            required
            id="headingSkills"
            name="headingSkills"
            label="Heading Skills "
            fullWidth
            autoComplete="shipping address-line1"
          />
          
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}