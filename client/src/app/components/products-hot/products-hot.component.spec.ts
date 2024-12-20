import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHotComponent } from './products-hot.component';

describe('ProductsHotComponent', () => {
  let component: ProductsHotComponent;
  let fixture: ComponentFixture<ProductsHotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsHotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
