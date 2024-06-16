import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// note: This is a part of Angular's Dependency Injection (DI) system. The DI system is what allows the class to get access to different services (like HttpClient) that it needs to function. When an instance of this class is created, Angular will automatically provide an instance of HttpClient (or use an existing one if it's already been created), and pass it to the constructor.

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(
      'https://api.angular-email.com/auth/username',
      {
        username,
      }
    );
  }
}
