import { Ad, IdAdd } from './types';

type Action =
 | { type: 'ADD_AD'; payload: Ad }
 | { type:'INIT_AD'; payload : Ad[] }
 | { type:'DEL_AD'; payload :IdAdd };
export default Action;
