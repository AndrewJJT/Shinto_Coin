import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinecoinComponent } from './minecoin.component';

describe('MinecoinComponent', () => {
  let component: MinecoinComponent;
  let fixture: ComponentFixture<MinecoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinecoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinecoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
