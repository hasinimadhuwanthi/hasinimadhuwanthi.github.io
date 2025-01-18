import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTabViewComponent } from './content-tab-view.component';

describe('ContentTabViewComponent', () => {
  let component: ContentTabViewComponent;
  let fixture: ComponentFixture<ContentTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTabViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
