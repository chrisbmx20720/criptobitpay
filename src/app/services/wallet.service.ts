import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = '../../assets/data/db.json'; // Ruta a tu archivo db.json

  constructor(private http: HttpClient) {}

  getWallet(walletId: string): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.apiUrl}/wallets/${walletId}`);
  }
}
