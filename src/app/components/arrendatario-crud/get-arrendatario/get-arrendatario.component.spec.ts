import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArrendatarioComponent } from './get-arrendatario.component';

describe('GetArrendatarioComponent', () => {
  let component: GetArrendatarioComponent;
  let fixture: ComponentFixture<GetArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
