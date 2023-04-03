import React, { useState } from 'react';
import './Form.css';

import { useAppDispatch } from '../../store';
import { addAd } from '../Ad/adSlice';

function Form():JSX.Element {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
const dispatch = useAppDispatch();

    function add(e :React.FormEvent<HTMLFormElement>) :void {
        e.preventDefault();
dispatch(addAd({ title, img, description, price }));
    }
  return (
    <div>
    <form className="formAdd container " onSubmit={add}>
    <div className="input-field col s6">
    <input placeholder="title" className="indigo lighten-1" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
    </div>
        <div className="input-field col s6">
        <input placeholder="img" className="indigo lighten-1" name="img" id="img" onChange={(e) => setImg(e.target.value)} value={img} />
        </div>
        <div className="input-field col s6">
        <input placeholder="description" className="indigo lighten-1" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
        </div>
        <div className="input-field col s6">
        <input placeholder="price" className="indigo lighten-1" name="price" id="price" onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>

        <button type="submit" className="indigo">add</button>
    </form>
    </div>
  );
}

export default Form;
