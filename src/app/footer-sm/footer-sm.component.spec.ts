import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSmComponent } from './footer-sm.component';

describe('FooterSmComponent', () => {
  let component: FooterSmComponent;
  let fixture: ComponentFixture<FooterSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
