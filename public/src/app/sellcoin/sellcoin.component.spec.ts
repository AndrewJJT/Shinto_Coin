import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellcoinComponent } from './sellcoin.component';

describe('SellcoinComponent', () => {
  let component: SellcoinComponent;
  let fixture: ComponentFixture<SellcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
