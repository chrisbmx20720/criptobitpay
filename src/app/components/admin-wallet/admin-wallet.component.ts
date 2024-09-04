import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalletService } from '../../services/wallet.service'; // Asegúrate de tener un servicio para manejar la información

@Component({
  selector: 'app-admin-wallet',
  templateUrl: './admin-wallet.component.html',
  styleUrls: ['./admin-wallet.component.css']
})
export class AdminWalletComponent {
  
  walletId: any;
  wallet: any;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private walletService: WalletService
  ) {}

  ngOnInit(): void {
    this.walletId = this.route.snapshot.paramMap.get('walletId') || '';
    this.loadWalletData();
  }

  loadWalletData(): void {
    this.walletService.getWallet(this.walletId).subscribe({
      next: (data) => {
        this.wallet = data;
      },
      error: (err) => {
        this.error = 'Error loading wallet data.';
      }
    });
  }
}
