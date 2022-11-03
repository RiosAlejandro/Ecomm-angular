import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/data.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dataCard!: Data[];

  constructor() { }

  ngOnInit(): void {
  }

}
