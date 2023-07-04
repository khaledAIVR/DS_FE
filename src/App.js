import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import UserContainer from './containers/UserContainer';

import useStyles from './styles/AppStyles';

const App = () => {
  const classes = useStyles();

  const newOne = {
    software_type: '',
    cost: '',
    budget: '',
    number_of_users: '',
    company_size: '',
    software_description: '',
    software_requirements: '',
  };

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <header className={classes.header}>
        <h1>
          <span>Software Purchase Prediction</span>
        </h1>
      </header>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserContainer initialValues={newOne} />
      </MuiPickersUtilsProvider>
    </Container>
  );
};

export default App;
