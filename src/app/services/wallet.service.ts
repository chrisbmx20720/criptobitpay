import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet, Coin } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'http://localhost:3000/wallets'; 

  constructor(private http: HttpClient) {}

  getWallet(walletId: string): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.apiUrl}/${walletId}`);
  }
}
