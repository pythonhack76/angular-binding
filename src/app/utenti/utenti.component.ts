import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit, OnChanges {
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

}
