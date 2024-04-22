import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArrendatarioComponent } from './update-arrendatario.component';

describe('UpdateArrendatarioComponent', () => {
  let component: UpdateArrendatarioComponent;
  let fixture: ComponentFixture<UpdateArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
