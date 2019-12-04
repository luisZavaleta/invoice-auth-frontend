import React, {Component} from 'react';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
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

import {onValidateMailConstruct} from "../../actions/validate-mail-actions";


class ValidateMail extends Component{

  constructor(props) {
    super(props);
    console.log("Token==>"+props.match.params.token)
    props.dispatch(onValidateMailConstruct(props.match.params.token));
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
             {this.props.validateMail.message}
          </Typography>
          <form className={classes.form} noValidate>
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

ValidateMail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(singInStyles)(ValidateMail);
