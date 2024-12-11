import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private hostname = "http://localhost:";
  private portNo = 8080;

  private loginURL = this.hostname+this.portNo+"/api/v1/login";

  public login(loginDetails:Object):Observable<any>{
    return this.httpClient.post(this.loginURL, loginDetails);
  }

  extractRoles(jsonObject: any): string[] {
    return jsonObject.roles.map((role: { authority: string }) => role.authority);
  }

  decodeToken(token:string){
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    return JSON.parse(decodedPayload);
  }

}
