export type Ad = {
    id?:number;
    img:string;
    title:string;
    description:string;
    price:string;
};
export type State = {
    adsArr:Ad[];
    error:undefined | string;
};
export type IdAdd = Ad['id'];
export type Message = { message:string };
