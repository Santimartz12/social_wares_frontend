export interface Users {
    id?:      number;
    username: string;
    email:    string;
    fullname: string;
    password: string;
}

export interface UsersNoPassword extends Omit<Users, 'password'> {}

export interface UserLogin extends Omit<Users, 'id' | 'username' | 'fullname' > {}