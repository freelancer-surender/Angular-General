import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsComponent } from './fruits.component';

describe('FruitsComponent', () => {
  let component: FruitsComponent;
  let fixture: ComponentFixture<FruitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitsComponent]
    });
    fixture = TestBed.createComponent(FruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
