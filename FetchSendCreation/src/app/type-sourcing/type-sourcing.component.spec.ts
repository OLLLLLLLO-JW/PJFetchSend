import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSourcingComponent } from './type-sourcing.component';

describe('TypeSourcingComponent', () => {
  let component: TypeSourcingComponent;
  let fixture: ComponentFixture<TypeSourcingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeSourcingComponent]
    });
    fixture = TestBed.createComponent(TypeSourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
