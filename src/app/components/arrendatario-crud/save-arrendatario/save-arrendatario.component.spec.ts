import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveArrendatarioComponent } from './save-arrendatario.component';

describe('SaveArrendatarioComponent', () => {
  let component: SaveArrendatarioComponent;
  let fixture: ComponentFixture<SaveArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
