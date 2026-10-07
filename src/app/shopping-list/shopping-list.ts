import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  imports: [],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList {
  @Input({ required: true }) items!: string[];
  @Output() removeItem = new EventEmitter<number>();

  requestDelete(index: number): void {
    this.removeItem.emit(index);
  }
}
