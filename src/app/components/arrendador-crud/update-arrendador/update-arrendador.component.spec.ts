import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArrendadorComponent } from './update-arrendador.component';

describe('UpdateArrendadorComponent', () => {
  let component: UpdateArrendadorComponent;
  let fixture: ComponentFixture<UpdateArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
