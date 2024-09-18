import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecargasComponent } from './precargas.component';

describe('PrecargasComponent', () => {
  let component: PrecargasComponent;
  let fixture: ComponentFixture<PrecargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecargasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
