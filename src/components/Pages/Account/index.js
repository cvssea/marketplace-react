import { connect } from 'react-redux';
import AccountPage from './AccountPage';

const mapState = ({ currentUser }) => ({ currentUser });

export default connect(mapState)(AccountPage);
