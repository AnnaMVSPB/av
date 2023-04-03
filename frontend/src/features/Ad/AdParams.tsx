import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store';

function AdParams() :JSX.Element {
    const { id } = useParams();
const { adsArr } = useSelector((store:RootState) => store.ad);
    const ad = adsArr.find((el) => el.id === Number(id));
    const navigate = useNavigate();

  return (
    <div className="col s3 ">
    <div className="card  blue lighten-2">
      { ad && (
<><div className="card-image">
        <img src={ad.img} alt="..." />
        <span className="card-title">{ad.title}</span>
  </div>
      <div className="card-content">
        <p>
        {ad.description}
        </p>
      </div>
      <h3>{`Цена :${ad.price} `}</h3>
      <div />
</>
)}
      <button type="button" onClick={() => navigate(-1)}>назад</button>
    </div>
    </div>
  );
}

export default AdParams;
