import { connect } from 'react-redux';

import AuthPage from './AuthPage';

const mapState = ({ currentUser }) => ({ currentUser });

export default connect(mapState)(AuthPage);
