import React, {Component} from 'react';
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

import {
    performLogin,
    onUsernameChange,
    onPasswordChange
} from "../../actions/login-actions";



class Login extends Component{


  onUsernameChange = (e) => {
    this.props.dispatch(onUsernameChange(e.target.value));
  };

  onPasswordChange = (e) => {
    this.props.dispatch(onPasswordChange(e.target.value));
  };


  performLogin = (e) => {
    e.preventDefault(); 
    this.props.dispatch(performLogin(this.props.login.user));
  };


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
          Log in into your account.
        </Typography>
        <form className={classes.form} noValidate>
        
       
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={this.onUsernameChange}
                value={this.props.login.user.username}
                error={this.props.login.status === 401 || this.props.login.status === 407}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.onPasswordChange}
                value={this.props.login.user.password}
                error={this.props.login.status === 401 || this.props.login.status === 407}
              />
            </Grid>
            
             
             <Grid item xs={12} bgcolor="error.main" >
                <Typography 
                  component="p" 
                  variant="body2"
                  color="error">
                  
                  <Box borderRadius="borderRadius"  color="error.main" p={1} m={1} >
                      {this.props.login.message}
                  </Box>

                   <Box borderRadius="borderRadius"  color="primary.main" p={1} m={1} >
                      {this.props.login.status === 200 && "You had been logged  in sucessfully"}
                  </Box>
                </Typography>
             </Grid>
          
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => this.performLogin(e)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Do no have ane acount yet? Sign up
              </Link>
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

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(singInStyles)(Login);