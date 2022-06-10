import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryListDetailComponent } from './admin-category-list-detail.component';

describe('AdminCategoryListDetailComponent', () => {
  let component: AdminCategoryListDetailComponent;
  let fixture: ComponentFixture<AdminCategoryListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryListDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
