import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

import { AuthData } from "./auth-data.model";
import { LoginAuthData } from "./login-auth.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  public isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getisAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  register(name: string, email: string, password: string) {
    const authData: AuthData = {
      name: name,
      email: email,
      password: password,
    };
    return this.http
      .post("http://localhost:3000/api/users/register", authData)
      .subscribe(
        () => {
          this.router.navigate(["/auth/login"]);
        },
        (error) => {
          this.authStatusListener.next(false);
        }
      );
  }

  login(email: string, password: string) {
    const loginAuthData: LoginAuthData = { email: email, password: password };
    this.http
      .post<{ token: string; expiresIn: number }>(
        "http://localhost:3000/api/users/login",
        loginAuthData
      )
      .subscribe(
        (response) => {
          //creating a constant of 'token' to hold the 'token' from the response.
          const token = response.token;
          //set the 'token' of this request to the retrieved 'token' that's in the const now.
          this.token = token;
          if (token) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            console.log(expirationDate);
            this.saveAuthData(token, expirationDate);
            this.router.navigate(["/"]);
          }
        },
        (error) => {
          this.authStatusListener.next(false);
        }
      );
  }

  autoAuthUser() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
      return;
    }
    const now = new Date();
    const expiresIn = authInfo.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInfo.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.router.navigate(["/auth/login"]);
    this.clearAuthData();
  }

  private setAuthTimer(duration: number) {
    console.log("setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
    };
  }
} //file end
