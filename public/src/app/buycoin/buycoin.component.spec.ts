import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycoinComponent } from './buycoin.component';

describe('BuycoinComponent', () => {
  let component: BuycoinComponent;
  let fixture: ComponentFixture<BuycoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuycoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
