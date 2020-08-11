import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBottomSheetComponent } from './text-bottom-sheet.component';

describe('TextBottomSheetComponent', () => {
  let component: TextBottomSheetComponent;
  let fixture: ComponentFixture<TextBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
