import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershttpComponent } from './usershttp.component';

describe('UsershttpComponent', () => {
  let component: UsershttpComponent;
  let fixture: ComponentFixture<UsershttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsershttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsershttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
