import React, {Component} from 'react';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { singInStyles } from '../commons/styles';
import Copyright from "../commons/Copyright";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Redirect } from 'react-router-dom'


import axios from 'axios';



class ValidateMail extends Component{


     API_BASE_URL = process.env.REACT_APP_BASE_PATH;

    axiosClient =  axios.create({
        baseURL: this.API_BASE_URL,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + this.props.cookies.get('token')
        },
    });

    getAuthData = () => {

      this.axiosClient.get("/home")
      .then(resp =>{

        this.setState({
          validUntil: resp.data.validUntil,
          currentDate: resp.data.currentDate,
          secondsLeft: resp.data.difference
        });
    
      }).catch(error => {
        this.setState({

          validUntil: -1,
          currentDate: '',
          secondsLeft: ''
        });
        
      });

    };

  renderRedirect = () => {
    if (this.state.validUntil === -1) {
      return <Redirect to='/login' />
    }
  }



  constructor(props) {
      super(props);
     

      this.state = {
        validUntil: '',
        currentDate: '',
        secondsLeft: ''
      };

       this.getAuthData()
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
             TOKEN TEST
          </Typography>
          <form className={classes.form} noValidate>
              <Grid container justify="flex-end">
                <Grid style={{"margin-top":"10px"}} >

                 <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Valid Until</TableCell>
                        <TableCell align="right">Current Date</TableCell>
                        <TableCell align="right">Second Left</TableCell>
                       
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableCell>{this.state.validUntil}</TableCell>
                        <TableCell align="right">{this.state.currentDate}</TableCell>
                        <TableCell align="right">{this.state.secondsLeft}</TableCell>
                       
                    </TableBody>
                </Table>
                 
                </Grid>
              </Grid>
          </form>
          {this.renderRedirect()}
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
