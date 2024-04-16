import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllArrendadorComponent } from './get-all-arrendador.component';

describe('GetAllArrendadorComponent', () => {
  let component: GetAllArrendadorComponent;
  let fixture: ComponentFixture<GetAllArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
