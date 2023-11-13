import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart } from './../redux/User/user.actions';

import Header from './../components/Header';
import VerticalNav from './../components/VerticalNav';
import Footer from './../components/Footer';
import { checkUserIsAdmin } from '../Utils';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const AdminLayout = props => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="adminLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              {isAdmin ? (
              <li>
                <Link to="/admin">
                  Products
                </Link>
              </li>
              ):null}
              <li>
                <Link to="/dashboard">
                  Orders
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
