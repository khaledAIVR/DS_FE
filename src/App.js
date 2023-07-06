import React, { useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import UserContainer from './containers/UserContainer';

import useStyles from './styles/AppStyles';

const App = () => {
  const classes = useStyles();
  const [result, setResult] = useState(null);
  const newOne = {
    software_type: '',
    cost: '',
    budget: '',
    number_of_users: '',
    company_size: '',
    software_description: '',
    software_requirements: '',
  };

  console.log(result);

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <header className={classes.header}>
        <h1>
          <span>Software Purchase Prediction</span>
        </h1>
      </header>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserContainer initialValues={newOne} setResult={setResult} />
      </MuiPickersUtilsProvider>

      {result ? (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <h1>
              The Model Suggest
              {result.label === 'LABEL_0' ? (
                <span style={{ marginLeft: '10px', marginRight: '10px' }}>
                  NOT
                </span>
              ) : (
                '  '
              )}
              Buying the Software with Confidence of:
            </h1>
            <h1>{result.score.toFixed(2)}</h1>
          </div>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default App;
