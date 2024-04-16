import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePropiedadComponent } from './delete-propiedad.component';

describe('DeletePropiedadComponent', () => {
  let component: DeletePropiedadComponent;
  let fixture: ComponentFixture<DeletePropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePropiedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
