import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitCuesComponent } from './mit-cues.component';

describe('MitCuesComponent', () => {
  let component: MitCuesComponent;
  let fixture: ComponentFixture<MitCuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitCuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitCuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
