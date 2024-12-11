export interface Usermodel {

    username:string;
    roles:Role[];

}


export interface Role {
    authority: string;
  }