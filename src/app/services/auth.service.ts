import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importar el operador map

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '../../assets/data/db.json';

  constructor(private http: HttpClient) {}

  // Método para obtener usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Método para validar las credenciales
  validateUser(username: string, password: string): Observable<User | undefined> {
    return this.getUsers().pipe(
      map((users: User[]) => 
        users.find(user => user.username === username && user.password === password)
      )
    );
  }
}
