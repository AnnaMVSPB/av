export type User = {
    id?:number;
    name:string;
    email:string;
    password?:string;
    password2?:string;
};
export type Message = {
    message:string
};

export type State = {
    user: {} | User;
    error: undefined | string;

};
