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
import Copyright from "../commons/Copyright"
import { createUser, createNewUser } from "../../actions/login-actions"


class SignIn extends Component{

  constructor(props){
    super(props);
    this.state = {
      statusCode: '',
      user: {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        confirmPassword: ''
      },
    }

  }

  componentWillReceiveProps(nextProps) {
  
  alert("componentWillReceiveProps ==>" +  JSON.stringify(this.props, null, "\t"));

    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        firstname : this.props.user.username
      }
      
    });
  }

  onCreateUser = (e) =>{

    e.preventDefault(); 
    this.props.dispatch(createNewUser(this.state.user));
    
  }

  onFirstNameChange = (e) => {
      this.setState({
        user:{
          ...this.state.user,
          firstname:e.target.value
        }
      })
  }

    onLastNameChange = (e) => {
      this.setState({
        user:{
          ...this.state.user,
          lastname:e.target.value
        }
      })
    }

    onEmailChange = (e) => {
      this.setState({
        user:{
          ...this.state.user,
          username:e.target.value
        }
      })
    }

    onPasswordChange = (e) => {
      this.setState({
        user:{
          ...this.state.user,
          password:e.target.value
        }
      })
    }

    onConfirmPasswordChange = (e) => {
      this.setState({
        user:{
          ...this.state.user,
          confirmPassword:e.target.value
        }
      })
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
        {this.props.user.username}  Enter your information to create a new account. 
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
                onChange={this.onFirstNameChange}
                value={this.state.user.firstname}
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
                onChange={this.onLastNameChange}
                value={this.state.user.lastname}
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
  
                onChange={this.onEmailChange}
                value={this.state.user.username}
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
                onChange={this.onPasswordChange}
                value={this.state.user.password}
               
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
                onChange={this.onConfirmPasswordChange}
                value={this.state.user.confirmPassword}
              />
            </Grid>
             
             <Grid item xs={12} bgcolor="error.main" >
                <Typography 
                  component="p" 
                  variant="body2"
                  color="error">
                  
                  <Box borderRadius="borderRadius" bgcolor="error.main" color="error.contrastText" p={1} m={1} >
                    Error Goes here
                  </Box>
                </Typography>
             </Grid>
          </Grid>
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
              <Link href="#" variant="body2">
                Already have an account? Sign in 
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