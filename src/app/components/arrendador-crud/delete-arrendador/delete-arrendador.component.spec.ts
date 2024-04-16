import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArrendadorComponent } from './delete-arrendador.component';

describe('DeleteArrendadorComponent', () => {
  let component: DeleteArrendadorComponent;
  let fixture: ComponentFixture<DeleteArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
