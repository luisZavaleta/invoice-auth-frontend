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



class SignInSuccessful extends Component{


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
         One last step. Your account is almost created. You just need to validate your e-mail.


        </Typography>
        


      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
  }

}

SignInSuccessful.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(singInStyles)(SignInSuccessful);