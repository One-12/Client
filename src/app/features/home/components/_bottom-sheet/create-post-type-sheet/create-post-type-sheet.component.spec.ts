import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostTypeSheetComponent } from './create-post-type-sheet.component';

describe('CreatePostTypeSheetComponent', () => {
  let component: CreatePostTypeSheetComponent;
  let fixture: ComponentFixture<CreatePostTypeSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePostTypeSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostTypeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
