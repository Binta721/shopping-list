import { Component } from '@angular/core';
import { ShoppingForm } from './shopping-form/shopping-form';

@Component({
  selector: 'app-root',
  imports: [ShoppingForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}