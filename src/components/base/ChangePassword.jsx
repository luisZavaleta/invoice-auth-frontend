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
    onChangePasswordConstruct,
    onChangePasswordPasswordChange,
    onChangePasswordConfirmPasswordChange,
    onChangePasswordSubmit
} from  "../../actions/change-password-actions";




class ChangePassword extends Component{


  constructor(props) {
    super(props);
    this.props.dispatch(onChangePasswordConstruct(this.props.match.params.token, this.props.match.params.username))
  };

  onChangePasswordPasswordChange = (e) => {
    this.props.dispatch(onChangePasswordPasswordChange(e.target.value));
  };


  onChangePasswordConfirmPasswordChange = (e) => {
    this.props.dispatch(onChangePasswordConfirmPasswordChange(e.target.value));
  };



  onChangePasswordSubmit = (e) => {

    e.preventDefault(); 
    this.props.dispatch(onChangePasswordSubmit(this.props.resetPassword));
  };


  getErrors = (err)=> {
   return  <ul> {err.map((er) => <li>{er}</li>)} </ul>

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
          {this.props.resetPassword.status !== 200 && "Change your password."}
          {this.props.resetPassword.status === 200 && "Your password had been sucessfully changed."}


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
                onChange={this.onChangePasswordPasswordChange}
                value={this.props.resetPassword.password}
                error={ this.props.resetPassword.errors.length > 0}
                className={this.props.resetPassword.status === 200 ? classes.hide : null}
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
                onChange={this.onChangePasswordConfirmPasswordChange}
                value={this.props.resetPassword.confirmPassword}
                error={this.props.resetPassword.errors.length > 0}
                className={this.props.resetPassword.status === 200 ? classes.hide : null}
              />
            </Grid>
             
            <Grid item xs={12} bgcolor="error.main" >
                <Typography 
                  component="p" 
                  variant="body2"
                  color="error">
                  
                  <Box borderRadius="borderRadius"  color="error.main" p={1} m={1} >
                      {
                        this.props.resetPassword.errors.length > 0 && 
                        this.getErrors(this.props.resetPassword.errors)
                      }
                  </Box>

                  
                </Typography>
            </Grid>
          
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.resetPassword.status === 200 ? classes.hide : classes.submit}
              onClick={(e) => this.onChangePasswordSubmit(e)}
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