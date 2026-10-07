import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-form',
  imports: [FormsModule],
  templateUrl: './shopping-form.html',
  styleUrl: './shopping-form.css'
})
export class ShoppingForm {
  itemName: string = '';

  @Output() itemAdded = new EventEmitter<string>();

  addItem() {
    if (this.itemName.trim() !== '') {
      this.itemAdded.emit(this.itemName);
      this.itemName = '';
    }
  }
}