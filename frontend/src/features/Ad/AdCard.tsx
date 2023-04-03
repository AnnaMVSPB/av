import React, { useState } from 'react';
import './Ad.css';
import { useNavigate } from 'react-router-dom';

import { Ad } from './types/types';
import { useAppDispatch } from '../../store';
import { deleteAd } from './adSlice';

function AdCard({ ad }:{ ad:Ad }):JSX.Element {
const dispatch = useAppDispatch();
  const [upd, setUpd] = useState(false);
  const navigate = useNavigate();
  const delAd = ():void => {
  dispatch(deleteAd(ad.id));
  };
  return (

    <div className="col s3 ">
      <div className="card  blue lighten-2">
        <div className="card-image">
          <img src={ad.img} alt="..." onDoubleClick={() => navigate(`/ad/${ad.id}`)} />
          <span className="card-title">{ad.title}</span>
        </div>
        <div className="card-content">
          <p>
          {ad.description}
          </p>
        </div>
        <h3>{`Цена :${ad.price} `}</h3>
        <div>
         <button className="button blue lighten-4" type="button" onClick={delAd}>del<i className="material-icons">delete_forever</i></button>
         {!upd && <button className="button blue lighten-4" type="button" onClick={() => setUpd((p) => !p)}>upd<i className="material-icons">create</i></button>}
        </div>
        {upd && (
       <form>
          <input />
          <button type="button">изменить</button>
       </form>
)}
      </div>
    </div>

  );
}

export default AdCard;
