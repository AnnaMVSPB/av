import { Message, User } from './types/types';

export const registration = async (obj:User):Promise<User | Message> => {
    const res = await fetch('http://localhost:4000/api/auth/sign-up', {
         method: 'POST',
         credentials: 'include',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(obj)
     });
     if (!res.ok) {
        const { message } = await res.json();
        throw message;
     }
     return res.json();
 };

 export const login = async (obj:User):Promise<User | Message> => {
    const res = await fetch('http://localhost:4000/api/auth/sign-up', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(obj)
     });
     return res.json();
 };
 export const session = async ():Promise<User | Message> => {
    const res = await fetch('http://localhost:4000/api/auth/verification', { credentials: 'include', });
    if (!res.ok) {
        const { message } = await res.json();
        throw message;
     }
     return res.json();
 };
 export const logout = async ():Promise< Message> => {
    const res = await fetch('http://localhost:4000/api/auth/logout', { credentials: 'include', });
    if (!res.ok) {
        const { message } = await res.json();
        throw message;
     }
     return res.json();
 };
