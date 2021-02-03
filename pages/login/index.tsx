import React from 'react';


import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';

import PageBody from '@components/page-body';

const LoginContainer = styled.div`
width: 300px;
height: 300px;
display: flex;
@media screen and (min-width: 768px){
  width: 500px;
}
`;

const Login = () => {
  return (
    <PageBody center >
      <LoginContainer>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Login"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            Entrar com o google
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary"> TESTE </Button>
          </Grid>
        </Grid>
      </LoginContainer>
    </PageBody>

  )
}

export default Login
