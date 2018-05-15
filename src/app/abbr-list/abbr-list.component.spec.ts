import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbrListComponent } from './abbr-list.component';

describe('AbbrListComponent', () => {
  let component: AbbrListComponent;
  let fixture: ComponentFixture<AbbrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
