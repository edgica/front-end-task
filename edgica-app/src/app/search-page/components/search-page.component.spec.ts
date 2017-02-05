/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropdownModule } from 'ng2-bootstrap';
import { TooltipModule } from 'ng2-bootstrap';

import { AppSearchPageComponent } from './search-page.component';
import { AppSearchPageService } from '../shared/search-page.service';

describe('AppSearchPageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppSearchPageComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TooltipModule.forRoot(),
        DropdownModule.forRoot(),
      ],
      providers: [
        AppSearchPageService,
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
