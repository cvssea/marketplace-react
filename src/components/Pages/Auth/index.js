import { connect } from 'react-redux';
import { attemptAuth } from '../../../store/actions/auth';
import AuthPage from './AuthPage';

const mapState = ({ currentUser }) => ({ currentUser });

export default connect(
  mapState,
  { attemptAuth }
)(AuthPage);
