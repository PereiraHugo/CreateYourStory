import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRuleComponent } from './category-rule.component';

describe('CategoryRuleComponent', () => {
  let component: CategoryRuleComponent;
  let fixture: ComponentFixture<CategoryRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
