import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPropiedadComponent } from './get-all-propiedad.component';

describe('GetAllPropiedadComponent', () => {
  let component: GetAllPropiedadComponent;
  let fixture: ComponentFixture<GetAllPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllPropiedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
