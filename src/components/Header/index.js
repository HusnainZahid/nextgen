import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/logo.png';
import { checkUserIsAdmin } from '../../Utils';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);
  const isAdmin = checkUserIsAdmin(currentUser);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  useEffect(() => {
    setActiveMenu(false);
  }, [location]);

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <h3>NextGen</h3>
          </Link>
        </div>

        {/* <nav className={`mainMenu ${activeMenu ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search">
                Search
              </Link>
            </li>
          </ul>
        </nav> */}

        <div className="callToActions">

          <ul>

            <li>
            <Link to="/search">
                {/* Search */}
                <i className='fa fa-search' />
            </Link>
            </li>
            <li className="hideOnMobile">
                <Link to="/cart">
                  {/* Your Cart ({totalNumCartItems}) */}
                  {totalNumCartItems !== 0 ? (
                  <i className="fa fa-shopping-cart">
                  ({totalNumCartItems})
                  </i>
                  ):
                  <i className="fa fa-shopping-cart"></i>}
                </Link>
            </li>

            {currentUser && [
              <li key={1}>
                <Link to={isAdmin?"/admin":"/dashboard"}>
                  {/* My Account */}
                  <i className="fa fa-user-circle"></i>
                </Link>
              </li>,
              // <li key={2}>
              //   <span onClick={() => signOut()}>
              //     LogOut
              //     <i class="fa fa-sign-out"></i>
              //   </span>
              // </li>
            ]}

            {!currentUser && [
              <li key={2}>
                <Link to="/login">
                  {/* Login */}
                  <i className="fa fa-user-circle"></i>
                </Link>
              </li>
            ]}

            {/* <li className="mobileMenu">
              <span onClick={() => setActiveMenu(!activeMenu)}>
                <i className="fa fa-bars"></i>
              </span>
            </li> */}

          </ul>





        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};

export default Header;
