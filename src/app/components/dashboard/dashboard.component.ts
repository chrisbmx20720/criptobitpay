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

<<<<<<< HEAD
  /*ngOnInit(): void {
    const walletId = localStorage.getItem('walletId');
    
    if (walletId) {
=======
  ngOnInit(): void {
    // Recuperar el usuario actual del localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);

      // Destructuring para obtener walletId y name
      const { walletId, name, lastname } = this.currentUser;
      console.log('Wallet ID:', walletId);
      console.log('Nombre:', name);

      this.username = name + " "+ lastname;

>>>>>>> 8d646611378bf3a32e9b3450ba0644185b1b00ef
      this.walletService.getWallet(walletId).subscribe(wallet => {
        this.wallet = wallet;
      });

    } else {
      console.log('No hay usuario en localStorage');
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
