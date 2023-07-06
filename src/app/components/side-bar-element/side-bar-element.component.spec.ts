import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarElementComponent } from './side-bar-element.component';

describe('SideBarElementComponent', () => {
  let component: SideBarElementComponent;
  let fixture: ComponentFixture<SideBarElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarElementComponent]
    });
    fixture = TestBed.createComponent(SideBarElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
