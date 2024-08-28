import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { Wallet } from '../../models/wallet.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  wallet!: Wallet;
  currentUser: any;
  username : any;

  constructor(private walletService: WalletService) {}

  /*ngOnInit(): void {
    const walletId = localStorage.getItem('walletId');
    
    if (walletId) {
      this.walletService.getWallet(walletId).subscribe(wallet => {
        this.wallet = wallet;
      });
    } else {
      console.error('No wallet ID found in localStorage.');
    }
  }*/

  ngOnInit(): void {
    // Recuperar el usuario actual del localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);

      // Destructuring para obtener walletId y name
      const { walletId, name } = this.currentUser;
      console.log('Wallet ID:', walletId);
      console.log('Nombre:', name);

      this.username = name;


      this.walletService.getWallet(walletId).subscribe(wallet => {
        this.wallet = wallet;
      });

    } else {
      console.log('No hay usuario en localStorage');
    }
  }
}
