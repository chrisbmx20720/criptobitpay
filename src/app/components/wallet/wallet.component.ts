
/*
import { Component, OnInit } from '@angular/core';
import { Wallet, Coin } from '../../models/wallet.model';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallet!: Wallet;
  currentView: string = 'bitcoin';
  totalEquity: number = 0;
  availableMargin: number = 0;
  currentUser: any;

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    // Recuperar el usuario actual del localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      console.log('Usuario actual:', this.currentUser);

      // Destructuring para obtener walletId y name
      const { walletId, name } = this.currentUser;
      console.log('Wallet ID:', walletId);
      console.log('Nombre:', name);

      // Utiliza walletId para obtener la wallet
      this.walletService.getWallet(walletId).subscribe(wallet => {
        this.wallet = wallet;
        this.setView(this.currentView);
      });

    } else {
      console.log('No hay usuario en localStorage');
    }
  }

  setView(view: string): void {
    const selectedCoin = this.wallet.coins.find(c => c.name.toLowerCase() === view.toLowerCase());
    
    if (selectedCoin) {
      this.currentView = view;
      this.totalEquity = selectedCoin.totalEquity;
      this.availableMargin = selectedCoin.availableMargin;
    }
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { Wallet, Coin } from '../../models/wallet.model';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallet!: Wallet;
  currentView: string = 'bitcoin'; // Puedes cambiar este valor por la moneda que desees mostrar por defecto.
  hedgeFundInvestment: number = 0;
  bonificat: number = 0;
  hedgeProtectionInsurance: number = 0;
  optQuantity: number = 0;
  strikePrice: number = 0;
  expirationDate: string = '';
  earnings: number = 0;
  currentUser: any;

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    // Recuperar el usuario actual del localStorage
    const storedUser = localStorage.getItem('currentUser');

    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      console.log('Usuario actual:', this.currentUser);

      // Destructuring para obtener walletId y name
      const { walletId, name } = this.currentUser;
      console.log('Wallet ID:', walletId);
      console.log('Nombre:', name);

      // Utiliza walletId para obtener la wallet
      this.walletService.getWallet(walletId).subscribe(wallet => {
        this.wallet = wallet;
        this.setView(this.currentView);
      });

    } else {
      console.log('No hay usuario en localStorage');
    }
  }

  setView(view: string): void {
    const selectedCoin = this.wallet.coins.find(c => c.name.toLowerCase() === view.toLowerCase());
    
    if (selectedCoin) {
      this.currentView = view;
      this.hedgeFundInvestment = 0;
      this.bonificat = selectedCoin.bonificat;
      this.hedgeProtectionInsurance = selectedCoin.hedgeProtectionInsurance;
      this.optQuantity = selectedCoin.optQuantity;
      this.strikePrice = selectedCoin.strikePrice;
      this.expirationDate = selectedCoin.expirationDate;
      this.earnings = selectedCoin.earnings;
    }
  }
}
