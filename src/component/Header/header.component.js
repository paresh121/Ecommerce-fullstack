import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import{ auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser?
      <div className='option' onClick={()=>auth.signOut()}>
      SignOut
    </div>: <Link className='option' to='/Signin'>
    SignIn
    </Link>
      }
    </div>
  </div>
);

const matchStatetoProps=state=>({
  currentUser:state.user.currentUser,
});
export default connect(matchStatetoProps)(Header);
