import React from 'react';
import { connect } from 'react-redux';
import { attemptAuth } from '../../../store/actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import { GridContainer, GridItem } from '../../../containers/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    width: '100%',
  },
}));

const SignInForm = ({
  expanded,
  setExpanded,
  attemptAuth,
  error,
  ...props
}) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
    <ExpansionPanel
      expanded={expanded}
      onChange={expanded ? null : setExpanded('signInPanel')}
    >
      <ExpansionPanelSummary
        expandIcon={
          expanded ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />
        }
      >
        <Typography variant="body1">Sign In</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <form onSubmit={handleSubmit}>
          <GridContainer justify="center" spacing={2}>
            <GridItem xs={11}>
              <TextField
                label="Email"
                InputProps={{ name: 'email' }}
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.target.value)}
                margin="dense"
                fullWidth
                error={!!error}
              />
            </GridItem>
            <GridItem xs={11}>
              <TextField
                label="Password"
                InputProps={{ type: 'password', name: 'password' }}
                variant="outlined"
                value={password}
                onChange={e => setPassword(e.target.value)}
                margin="dense"
                fullWidth
                error={!!error}
              />
            </GridItem>
            <GridItem xs={11}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
            </GridItem>
          </GridContainer>
        </form>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default connect(
  null,
  { attemptAuth }
)(SignInForm);
