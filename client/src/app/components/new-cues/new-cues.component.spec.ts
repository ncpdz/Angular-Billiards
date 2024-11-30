import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCuesComponent } from './new-cues.component';

describe('NewCuesComponent', () => {
  let component: NewCuesComponent;
  let fixture: ComponentFixture<NewCuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
