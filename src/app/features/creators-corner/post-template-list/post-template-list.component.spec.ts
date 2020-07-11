import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTemplateListComponent } from './post-template-list.component';

describe('PostTemplateListComponent', () => {
  let component: PostTemplateListComponent;
  let fixture: ComponentFixture<PostTemplateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTemplateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
