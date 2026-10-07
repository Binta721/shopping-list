import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Shopping List');
  });

  it('should add multiple articles through the form and delete only the middle article', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const input = page.querySelector('input')!;
    const addButton = page.querySelector('app-shopping-form button') as HTMLButtonElement;

    for (const article of ['5 pommes', '12 œufs', '1 pain']) {
      input.value = article;
      input.dispatchEvent(new Event('input'));
      await fixture.whenStable();
      addButton.click();
      await fixture.whenStable();
      expect(input.value).toBe('');
    }

    const articles = () => Array.from(page.querySelectorAll('app-shopping-list li span'))
      .map(element => element.textContent?.trim());
    expect(articles()).toEqual(['5 pommes', '12 œufs', '1 pain']);

    (page.querySelectorAll('app-shopping-list button')[1] as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(articles()).toEqual(['5 pommes', '1 pain']);

    input.value = '   ';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    addButton.click();
    await fixture.whenStable();
    expect(articles()).toEqual(['5 pommes', '1 pain']);
  });

  it('should remove one duplicate at a time and show the empty message after the last deletion', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.onAddItem('pommes');
    fixture.componentInstance.onAddItem('pommes');
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    (page.querySelector('app-shopping-list button') as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(fixture.componentInstance.items).toEqual(['pommes']);
    expect(page.querySelectorAll('app-shopping-list button').length).toBe(1);

    (page.querySelector('app-shopping-list button') as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(page.querySelector('app-shopping-list')?.textContent).toContain('Votre liste est vide.');
    expect(page.querySelectorAll('app-shopping-list button').length).toBe(0);
  });
});
