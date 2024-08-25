import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  currentView: string | null = 'bitcoin';

  totalEquity: number = 0;
  availableMargin: number = 0;

  ngOnInit(): void {
    this.setView('bitcoin'); // Inicializa con Bitcoin (BTC)
  }

  setView(view: string): void {
    this.currentView = view;

    // Actualiza totalEquity y availableMargin según la moneda seleccionada
    if (view === 'bitcoin') {
      this.totalEquity = 50000;
      this.availableMargin = 10000;
    } else if (view === 'ethereum') {
      this.totalEquity = 3000;
      this.availableMargin = 500;
    } else if (view === 'gold') {
      this.totalEquity = 1800;
      this.availableMargin = 300;
    } else if (view === 'binance') {
      this.totalEquity = 400;
      this.availableMargin = 100;
    }
  }
}
