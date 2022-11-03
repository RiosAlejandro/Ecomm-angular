import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-secundarios',
  templateUrl: './header-secundarios.component.html',
  styleUrls: ['./header-secundarios.component.scss']
})
export class HeaderSecundariosComponent implements OnInit {

  @Input() textoHeader!: string;
  @Input() tituloHeader!: string;
  @Input() classHeader!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
