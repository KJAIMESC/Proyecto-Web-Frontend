import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArrendatarioComponent } from './delete-arrendatario.component';

describe('DeleteArrendatarioComponent', () => {
  let component: DeleteArrendatarioComponent;
  let fixture: ComponentFixture<DeleteArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
