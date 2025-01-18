import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveViewComponent } from './objective-view.component';

describe('ObjectiveViewComponent', () => {
  let component: ObjectiveViewComponent;
  let fixture: ComponentFixture<ObjectiveViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
