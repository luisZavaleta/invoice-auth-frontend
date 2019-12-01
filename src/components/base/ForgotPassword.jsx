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
    onForgotPasswordUsernameChange,
    forgotPasswordSubmit
} from  "../../actions/forgot-password-actions";

class ForgotPassword extends Component{

  onEmailChange = (e) => {
    this.props.dispatch(onForgotPasswordUsernameChange(e.target.value));
  }

  forgotPasswordSubmit = (e) => {
    e.preventDefault(); 
    this.props.dispatch(forgotPasswordSubmit(this.props.forgotPassword.username));
  }

  isValidAccount = () => {
    return this.props.forgotPassword.status === 200 && this.props.forgotPassword.enable === true
  }
 
  isNotEnabledAccount = () => {
    return this.props.forgotPassword.status === 200 && this.props.forgotPassword.enable === false
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
              { !this.isValidAccount() && 
                "Forgot your password? Write down your username and we will send you a mail to recover it."}

              { this.isValidAccount() && 
                "You will recieve a mail soon, please click in the link provided to reset your password."}
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
                  value={this.props.forgotPassword.username}
                  onChange={this.onEmailChange}
                  className={ this.isValidAccount() ? classes.hide : null}         
                />
              </Grid>
               
              <Grid item xs={12} bgcolor="error.main" >
                  <Typography 
                    component="p" 
                    variant="body2"
                    color="error">
                    
                    <Box borderRadius="borderRadius"  color="error.main" p={1} m={1} >
                        {this.props.forgotPassword.status === 401 && "That username do not exists"}
                        {this.isNotEnabledAccount() && "This acount had not been validated yet"}
                    </Box>
                  </Typography>
              </Grid>
          
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={(e) => this.forgotPasswordSubmit(e)}
                className={this.isValidAccount() ? classes.hide : classes.submit} 
              >
                Recover Password
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

ForgotPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(singInStyles)(ForgotPassword);
