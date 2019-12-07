import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { singInStyles } from '../commons/styles';
import Copyright from "../commons/Copyright";
import {  createNewUser,
          onFirstNameChange,
          onLastNameChange,
          onUserNameChange,
          onPasswordChange,
          onConfirmPasswordChange} from "../../actions/signup-actions";

import {containsErrorOnField, passwordsMatchError }from "../../utils/utils"
import { Redirect } from 'react-router-dom'


class SignIn extends Component{

  onCreateUser = (e) =>{
    e.preventDefault(); 
    this.props.dispatch(createNewUser(this.props.user));
  }

  onFirstNameBlur = (e) => {
    this.props.dispatch(onFirstNameChange(e.target.value));
  }

  onLastNameBlur = (e) => {
    this.props.dispatch(onLastNameChange(e.target.value));
  }

  onUserNameBlur = (e) => {
    this.props.dispatch(onUserNameChange(e.target.value));
  }

  onPasswordBlur = (e) => {
     this.props.dispatch(onPasswordChange(e.target.value));
  }

  onConfirmPasswordBlur = (e) => {
    this.props.dispatch(onConfirmPasswordChange(e.target.value));
  }

  renderRedirect = () => {
    if (this.props.statusCode === 200) {
      return <Redirect to='/signinsucess' />
    }
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
         Enter your information to create a new account. 
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="standard"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={this.onFirstNameBlur}
                value={this.props.user.firstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard" 
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={this.onLastNameBlur}
                value={this.props.user.lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={this.onUserNameBlur}
                value={this.props.user.username}
                error={this.props.errors &&  containsErrorOnField( this.props.errors, "username")}
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
                onChange={this.onPasswordBlur}
                value={this.props.user.password}
                error={
                  this.props.errors &&  
                  (containsErrorOnField( this.props.errors, "password") ||  passwordsMatchError(this.props.errors))
                }
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
                onChange={this.onConfirmPasswordBlur}
                value={this.props.user.confirmPassword}
                error={this.props.errors &&  passwordsMatchError(this.props.errors)}
              />
            </Grid>
             
             <Grid item xs={12} bgcolor="error.main" >
                <Typography 
                  component="p" 
                  variant="body2"
                  color="error">
                  
                  <Box borderRadius="borderRadius"  color="error.main" p={1} m={1} >
                    {this.props.errors && 
                        <ul>
                          {this.props.errors.errors.map((error) =>  <li> {error.message} </li> )}
                        </ul>
                    }
                  </Box>
                </Typography>
             </Grid>
          </Grid>
          {this.renderRedirect()}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => this.onCreateUser(e)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Log In.
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

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(singInStyles)(SignIn);