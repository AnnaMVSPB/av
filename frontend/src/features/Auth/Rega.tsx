import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { registrationUser } from './authSlice';

function Rega() :JSX.Element {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user, error } = useSelector((store:RootState) => store.auth);

  if ('id' in user) {
     navigate('/');
  }
    const registr = (e:React.FormEvent<HTMLFormElement>) :void => {
      e.preventDefault();
      dispatch(registrationUser({ name, email, password, password2 }));
    };

  return (
    <div>
    <form className="formAdd container " onSubmit={registr}>
    <div className="input-field col s6">
    <input placeholder="name" className="indigo lighten-1" name="name" onChange={(e) => setName(e.target.value)} value={name} />
    </div>
        <div className="input-field col s6">
        <input placeholder="email" className="indigo lighten-1" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="input-field col s6">
        <input placeholder="password" className="indigo lighten-1" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div className="input-field col s6">
        <input placeholder="repeat password" className="indigo lighten-1" name="password2" onChange={(e) => setPassword2(e.target.value)} value={password2} />
        </div>
        <button type="submit" className="indigo">Зарегаться<i className="material-icons">person_add</i></button>
    </form>
    {error && <h1>{error}</h1>}
    </div>
  );
}

export default Rega;
