import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepairPageComponent } from './create-repair-page.component';

describe('CreateRepairPageComponent', () => {
  let component: CreateRepairPageComponent;
  let fixture: ComponentFixture<CreateRepairPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRepairPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRepairPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
