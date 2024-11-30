import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNewCuesComponent } from './item-new-cues.component';

describe('ItemNewCuesComponent', () => {
  let component: ItemNewCuesComponent;
  let fixture: ComponentFixture<ItemNewCuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemNewCuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemNewCuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
