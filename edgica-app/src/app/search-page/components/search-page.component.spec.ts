/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppSearchPageComponent } from './search-page.component';

describe('AppSearchPageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppSearchPageComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppSearchPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Search GitHub'`, async(() => {
    const fixture = TestBed.createComponent(AppSearchPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Search GitHub');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppSearchPageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Search GitHub');
  }));
});
