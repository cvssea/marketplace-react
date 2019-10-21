import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 1),
  },
}));

const AuthPage = ({ currentUser, attemptAuth, ...props }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('signUpPanel');
  const [error, setError] = React.useState(false);

  const handleExpand = panel => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setError(false);
  };

  React.useEffect(() => {
    if (currentUser && currentUser.error) {
      setError(currentUser.error);
    }
  }, [currentUser]);

  return (
    <div className={classes.root}>
      {error && <Typography>{error}</Typography>}
      <SignUpForm
        expanded={expanded === 'signUpPanel'}
        setExpanded={handleExpand}
        error={error}
        {...props}
      />
      <SignInForm
        expanded={expanded === 'signInPanel'}
        setExpanded={handleExpand}
        error={error}
        {...props}
      />
    </div>
  );
};

export default AuthPage;
