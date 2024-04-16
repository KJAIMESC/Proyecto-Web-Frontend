import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArrendadorComponent } from './get-arrendador.component';

describe('GetArrendadorComponent', () => {
  let component: GetArrendadorComponent;
  let fixture: ComponentFixture<GetArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
