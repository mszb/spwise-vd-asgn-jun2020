import { Component, OnInit, Input, Directive } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  constructor() {
  }

  @Input() heading: string;

  ngOnInit(): void {
  }

}
