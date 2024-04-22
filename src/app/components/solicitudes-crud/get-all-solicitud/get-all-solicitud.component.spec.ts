import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSolicitudComponent } from './get-all-solicitud.component';

describe('GetAllSolicitudComponent', () => {
  let component: GetAllSolicitudComponent;
  let fixture: ComponentFixture<GetAllSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllSolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
