import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllArrendatarioComponent } from './get-all-arrendatario.component';

describe('GetAllArrendatarioComponent', () => {
  let component: GetAllArrendatarioComponent;
  let fixture: ComponentFixture<GetAllArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
