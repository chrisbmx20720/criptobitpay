export interface Wallet {
    id: string;
    userId: string;
    coins: Coin[];
  }
  
  export interface Coin {
    id: string;
    name: string;
    amount: number;
    totalEquity: number;
    availableMargin: number;
  }
  