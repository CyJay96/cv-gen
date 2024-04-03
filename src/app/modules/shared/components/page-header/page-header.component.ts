import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent {
  @Input() titleFirstText: string = '';
  @Input() titleLastText: string = '';
  @Input() title2: string = '';
  @Input() title3: string = '';
}
