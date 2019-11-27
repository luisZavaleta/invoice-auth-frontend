import React, {Component} from 'react';

import {useParams} from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { singInStyles } from '../commons/styles';
import Copyright from "../commons/Copyright";




class ChangePassword extends Component{

componentWillMount(){
  console.log(this.props.match.params.token)
  console.log(this.props.match.params.username)
}



  render(){


    const { classes } = this.props;

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change your password  {this.props.params} :P
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
       
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={this.props.match.params.username}
                readonly
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                //onChange={this.onPasswordBlur}
                //value={this.props.user.password}
                /*error={
                  this.props.errors &&  
                  (containsErrorOnField( this.props.errors, "password") ||  passwordsMatchError(this.props.errors))
                }*/
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="confirm"
                label="Confirm Password"
                type="password"
                id="confirm"
                //onChange={this.onConfirmPasswordBlur}
                //value={this.props.user.confirmPassword}
                //error={this.props.errors &&  passwordsMatchError(this.props.errors)}
              />
            </Grid>
             
            <Grid item xs={12} bgcolor="error.main" >
                <Typography 
                  component="p" 
                  variant="body2"
                  color="error">
                  
                  <Box borderRadius="borderRadius"  color="error.main" p={1} m={1} >
                      {/*this.props.login.message*/}
                  </Box>

                   <Box borderRadius="borderRadius"  color="primary.main" p={1} m={1} >
                      {/*this.props.login.status === 200 && "You had been logged  in sucessfully"*/}
                  </Box>
                </Typography>
            </Grid>
          
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              //onClick={(e) => this.performLogin(e)}
            >
              Change Password
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Do no have ane acount yet? Sign up
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
  }
}

ChangePassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(singInStyles)(ChangePassword);