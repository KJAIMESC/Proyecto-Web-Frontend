import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePropiedadComponent } from './save-propiedad.component';

describe('SavePropiedadComponent', () => {
  let component: SavePropiedadComponent;
  let fixture: ComponentFixture<SavePropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavePropiedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavePropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
