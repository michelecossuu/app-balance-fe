import { Component } from '@angular/core';
import * as labels from '../../assets/labels/labels.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'balance-app-fe';
  labels = labels;
}
