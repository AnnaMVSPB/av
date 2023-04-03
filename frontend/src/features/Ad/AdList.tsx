import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Form from '../Form/Form';
import AdCard from './AdCard';

function AdList():JSX.Element {
const { adsArr} = useSelector((store:RootState) => store.ad);

  return (
    <>
    <Form />
    <div className="row">
        {adsArr.map((ad) => <AdCard ad={ad} key={ad.id} />)}
    </div>
    </>
  );
}

export default AdList;
