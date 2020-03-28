import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhapasceneComponent } from './khapascene.component';

describe('KhapasceneComponent', () => {
  let component: KhapasceneComponent;
  let fixture: ComponentFixture<KhapasceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhapasceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhapasceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
