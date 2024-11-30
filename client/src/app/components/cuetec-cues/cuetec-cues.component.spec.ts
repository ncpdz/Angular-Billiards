import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuetecCuesComponent } from './cuetec-cues.component';

describe('CuetecCuesComponent', () => {
  let component: CuetecCuesComponent;
  let fixture: ComponentFixture<CuetecCuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuetecCuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuetecCuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
