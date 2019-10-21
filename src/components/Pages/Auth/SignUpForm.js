import React from 'react';
import { connect } from 'react-redux';
import { attemptCreateAccount } from '../../../store/actions/auth';
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

const SignUpForm = ({ expanded, setExpanded, ...props }) => {
  const classes = useStyles();
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const [data, setData] = React.useState(initialState);
  const [validationErrors, setValidationErrors] = React.useState({});

  const handleChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
    setValidationErrors({
      ...validationErrors,
      [name]: false,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // validate
    let invalidInputs = {};
    for (let key in data) {
      if (!data[key]) {
        invalidInputs[key] = true;
      }
    }
    setValidationErrors(invalidInputs);

    // create account if no errors
    if (!Object.keys(invalidInputs).length) {
      const created = await props.attemptCreateAccount(data);
      if (created) {
        setData(initialState);
        props.history.push('/');
      }
    }
  };

  return (
    <ExpansionPanel
      expanded={expanded}
      onChange={expanded ? null : setExpanded('signUpPanel')}
    >
      <ExpansionPanelSummary
        expandIcon={
          expanded ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />
        }
      >
        <Typography variant="body1">Create Account</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <form onSubmit={handleSubmit}>
          <GridContainer justify="center" spacing={1}>
            <GridItem xs={5}>
              <TextField
                label="Name"
                InputProps={{ name: 'firstName' }}
                variant="outlined"
                value={data.firstName}
                onChange={handleChange}
                margin="dense"
                fullWidth
                error={validationErrors.firstName}
              />
            </GridItem>

            <GridItem xs={6}>
              <TextField
                label="Surname"
                InputProps={{ name: 'lastName' }}
                variant="outlined"
                value={data.lastName}
                onChange={handleChange}
                margin="dense"
                fullWidth
                error={validationErrors.lastName}
              />
            </GridItem>

            <GridItem xs={11}>
              <TextField
                label="Email"
                InputProps={{ name: 'email' }}
                variant="outlined"
                value={data.email}
                onChange={handleChange}
                margin="dense"
                fullWidth
                error={validationErrors.email}
              />
            </GridItem>
            <GridItem xs={11}>
              <TextField
                label="Password"
                InputProps={{ type: 'password', name: 'password' }}
                variant="outlined"
                value={data.password}
                onChange={handleChange}
                margin="dense"
                fullWidth
                error={validationErrors.password}
              />
            </GridItem>
            <GridItem xs={11}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Register
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
  { attemptCreateAccount }
)(SignUpForm);
