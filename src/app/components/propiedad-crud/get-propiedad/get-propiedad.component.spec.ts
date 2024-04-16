import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPropiedadComponent } from './get-propiedad.component';

describe('GetPropiedadComponent', () => {
  let component: GetPropiedadComponent;
  let fixture: ComponentFixture<GetPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPropiedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
