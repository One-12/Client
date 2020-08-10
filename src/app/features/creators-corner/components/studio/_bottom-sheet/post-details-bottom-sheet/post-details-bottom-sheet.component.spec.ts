import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsBottomSheetComponent } from './post-details-bottom-sheet.component';

describe('PostDetailsBottomSheetComponent', () => {
  let component: PostDetailsBottomSheetComponent;
  let fixture: ComponentFixture<PostDetailsBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
