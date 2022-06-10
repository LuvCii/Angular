import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCartDetailComponent } from './admin-cart-detail.component';

describe('AdminCartDetailComponent', () => {
  let component: AdminCartDetailComponent;
  let fixture: ComponentFixture<AdminCartDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCartDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
