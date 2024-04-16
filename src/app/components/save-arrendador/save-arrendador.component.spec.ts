import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveArrendadorComponent } from './save-arrendador.component';

describe('SaveArrendadorComponent', () => {
  let component: SaveArrendadorComponent;
  let fixture: ComponentFixture<SaveArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
