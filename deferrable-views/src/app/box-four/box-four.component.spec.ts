import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFourComponent } from './box-four.component';

describe('BoxFourComponent', () => {
  let component: BoxFourComponent;
  let fixture: ComponentFixture<BoxFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
