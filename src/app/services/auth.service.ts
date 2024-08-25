import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; 
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '../../assets/data/db.json';

  constructor(private http: HttpClient) {}

  // Método para obtener usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
      map(response => response.users || []), // Asegurarse de que la respuesta tenga un array 'users'
      catchError(error => {
        console.error('Error al obtener el archivo db.json:', error);
        return throwError(() => new Error('No se pudo cargar el archivo db.json'));
      })
    );
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
