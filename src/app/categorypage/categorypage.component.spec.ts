import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorypageComponent } from './categorypage.component';

describe('CategorypageComponent', () => {
  let component: CategorypageComponent;
  let fixture: ComponentFixture<CategorypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorypageComponent]
    });
    fixture = TestBed.createComponent(CategorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
