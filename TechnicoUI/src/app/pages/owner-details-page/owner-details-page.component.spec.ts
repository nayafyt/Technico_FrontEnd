import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDetailsPageComponent } from './owner-details-page.component';

describe('OwnerDetailsPageComponent', () => {
  let component: OwnerDetailsPageComponent;
  let fixture: ComponentFixture<OwnerDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
