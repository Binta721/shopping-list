import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingForm } from './shopping-form';

describe('ShoppingForm', () => {
  let component: ShoppingForm;
  let fixture: ComponentFixture<ShoppingForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
