import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSolicitudComponent } from './get-solicitud.component';

describe('GetSolicitudComponent', () => {
  let component: GetSolicitudComponent;
  let fixture: ComponentFixture<GetSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
