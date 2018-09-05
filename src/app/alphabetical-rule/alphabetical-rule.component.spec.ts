import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticalRuleComponent } from './alphabetical-rule.component';

describe('AlphabeticalRuleComponent', () => {
  let component: AlphabeticalRuleComponent;
  let fixture: ComponentFixture<AlphabeticalRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabeticalRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticalRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
