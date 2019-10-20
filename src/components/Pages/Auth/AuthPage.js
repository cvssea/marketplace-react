import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridContainer, GridItem } from '../../../containers/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(1),
  },
}));

const AuthPage = ({ currentUser, attemptAuth, ...props }) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (currentUser && currentUser.error) {
      setError(currentUser.error);
    }
  }, [currentUser, error]);

  const handleSubmit = async e => {
    e.preventDefault();
    const authenticated = await attemptAuth(email, password);
    if (authenticated) {
      setEmail('');
      setPassword('');
      props.history.push('/');
    }
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <Typography>{error || 'Login'}</Typography>
      <GridContainer justify="center" alignContent="center" spacing={2}>
        <GridItem xs={10}>
          <TextField
            id="email"
            label="Email"
            InputProps={{ name: 'email' }}
            variant="outlined"
            onChange={e => setEmail(e.target.value)}
            margin="dense"
            fullWidth
            error={!!error}
          />
        </GridItem>
        <GridItem xs={10}>
          <TextField
            id="password"
            label="Password"
            InputProps={{ type: 'password', name: 'password' }}
            variant="outlined"
            onChange={e => setPassword(e.target.value)}
            margin="dense"
            fullWidth
            error={!!error}
          />
        </GridItem>
        <GridItem>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};

export default AuthPage;
