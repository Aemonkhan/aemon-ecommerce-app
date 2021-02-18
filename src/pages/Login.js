import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: '30%',
    margin:'auto',
    justifyContent:'end',
    textAlign:'center',
    marginTop:'70px'
  },


});
const Login = (props) =>{
  const {email,
    setEmail,
     password,
     setPassword,
     handleLogin,
     handleSignup,
     hasAccount,
     setHasAccount,
     emailError,
     passwordError,
    }=props;
    const classes = useStyles();
  return(

    <Card className={classes.root}>
     <Typography variant="h5" component="h2">Login Form using Firebase Auth</Typography>
    <TextField 
    id="standard-basic"
    label="Username"
    type='text'
    autoFocus
    required
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    <p>{emailError}</p>
    <TextField 
    id="standard-basic"
    label="Password" 
    type='password'
    autoFocus
    required
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
  />
    <p>{passwordError}</p>
    <div>
      {hasAccount ? (
<>
<Button variant="contained" color="primary" onClick={handleLogin}>Sign In</Button>
<p>Don't have an account? 
  <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span>
  </p>
</>
      ):(
<>
<Button variant="contained" color="primary" onClick={handleSignup}>
Sign Up
      </Button>

<p>Have an account? 
  <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span>
  </p>
</>
      )}
    </div>
    </Card>
  )
}
export default Login;