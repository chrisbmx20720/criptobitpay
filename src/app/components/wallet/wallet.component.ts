import { Component, OnInit } from '@angular/core';
import { Wallet, Coin } from '../../models/wallet.model'; // Asegúrate de importar Coin
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallet!: Wallet;
  currentView: string = 'bitcoin'; // Usa string aquí
  totalEquity: number = 0;
  availableMargin: number = 0;

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    const walletId = localStorage.getItem('walletId');
    
    if (walletId) {
      this.walletService.getWallet(walletId).subscribe(wallet => {
        this.wallet = wallet;
        this.setView(this.currentView); // Inicializa con Bitcoin (BTC)
      });
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
