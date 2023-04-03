import { Ad, IdAdd, Message } from './types/types';

export const initAd = async ():Promise<Ad[]> => {
    const res = await fetch('http://localhost:4000/api/ads');
    return res.json();
 };

export const addAd = async (obj:Ad):Promise<Ad> => {
   const res = await fetch('http://localhost:4000/api/ads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    });
    if (!res.ok) {
        const { message } = await res.json();
        throw message;
     }
     return res.json();
};

export const deleteAd = async (id:IdAdd):Promise<number | Message> => {
    const res = await fetch(`http://localhost:4000/api/ads/${id}`, {
         method: 'DELETE',
     });
     if (!res.ok) {
        const { message } = await res.json();
        throw message;
     }
     return res.json();
 };
