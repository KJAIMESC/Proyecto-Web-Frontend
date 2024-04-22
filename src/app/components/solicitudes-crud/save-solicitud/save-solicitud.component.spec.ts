import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSolicitudComponent } from './save-solicitud.component';

describe('SaveSolicitudComponent', () => {
  let component: SaveSolicitudComponent;
  let fixture: ComponentFixture<SaveSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveSolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
