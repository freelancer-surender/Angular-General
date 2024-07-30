import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFiveComponent } from './box-five.component';

describe('BoxFiveComponent', () => {
  let component: BoxFiveComponent;
  let fixture: ComponentFixture<BoxFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxFiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
