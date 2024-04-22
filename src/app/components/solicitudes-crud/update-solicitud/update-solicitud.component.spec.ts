import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSolicitudComponent } from './update-solicitud.component';

describe('UpdateSolicitudComponent', () => {
  let component: UpdateSolicitudComponent;
  let fixture: ComponentFixture<UpdateSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
