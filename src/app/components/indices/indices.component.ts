import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent implements OnInit {

  indices = [
    { name: 'S&P 500', value: '4,500', change: '+0.5%' },
    { name: 'NASDAQ', value: '15,000', change: '-0.3%' },
    { name: 'Dow Jones', value: '34,000', change: '+0.2%' },
    { name: 'FTSE 100', value: '7,500', change: '+1.0%' },
    { name: 'DAX', value: '15,200', change: '+0.8%' },
    { name: 'CAC 40', value: '6,800', change: '+0.6%' },
    { name: 'NIKKEI 225', value: '29,000', change: '-0.4%' },
    { name: 'Hang Seng', value: '18,500', change: '-0.2%' },
    { name: 'ASX 200', value: '7,100', change: '+0.3%' },
    { name: 'TSX Composite', value: '21,500', change: '+0.7%' }
  ];

  positiveIndices: any[] = [];

  ngOnInit(): void {
    this.positiveIndices = this.getPositiveIndices();
  }

  getPositiveIndices(): any[] {
    return this.indices.filter(index => parseFloat(index.change) > 0);
  }
}
