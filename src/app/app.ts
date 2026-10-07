import { Component } from '@angular/core';
import { ShoppingForm } from './shopping-form/shopping-form';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [ShoppingForm, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items: string[] = [];

  onAddItem(name: string): void {
    const item = name.trim();
    if (item) {
      this.items = [...this.items, item];
    }
  }

  onRemoveItem(index: number): void {
    this.items = this.items.filter((_, itemIndex) => itemIndex !== index);
  }
}
