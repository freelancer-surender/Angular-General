import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalComponent } from './normal.component';

describe('NormalComponent', () => {
  let component: NormalComponent;
  let fixture: ComponentFixture<NormalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalComponent]
    });
    fixture = TestBed.createComponent(NormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
