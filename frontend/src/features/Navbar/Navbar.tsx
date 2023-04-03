import React from 'react';
import './Navbar.css';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { add, logoutUser } from '../Auth/authSlice';

function Navbar():JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useSelector((store:RootState) => store.auth);
  console.log(user)
  return (
    <div>
  <nav>
  <div className="nav-wrapper indigo darken-4 nav">
  <Link to="/">SELL</Link><i className="material-icons">monetization_on</i>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    { 'id' in user ? (
<>
<li onClick={() => dispatch(add())}><h1>{user.name}</h1></li>
<li>
    <Link to="/ad">Товары</Link>
</li>
        <li>

<p onClick={() => dispatch(logoutUser())}>Выход</p>
        </li>

</>
)
        : (
        <>
         <li>
    <Link to="/reg">Регистрация</Link>
         </li>
        <li>

    <Link to="/login">Вход</Link>
        </li>
        </>
      )}
  </ul>
  </div>
  </nav>
  <Outlet />
    </div>
  );
}

export default Navbar;
