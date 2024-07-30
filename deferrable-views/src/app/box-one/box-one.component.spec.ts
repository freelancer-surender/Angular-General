import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOneComponent } from './box-one.component';

describe('BoxOneComponent', () => {
  let component: BoxOneComponent;
  let fixture: ComponentFixture<BoxOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
