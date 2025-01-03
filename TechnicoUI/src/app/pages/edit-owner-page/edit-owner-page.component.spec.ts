import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOwnerPageComponent } from './edit-owner-page.component';

describe('EditOwnerPageComponent', () => {
  let component: EditOwnerPageComponent;
  let fixture: ComponentFixture<EditOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOwnerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
