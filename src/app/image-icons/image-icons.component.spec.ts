import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageIconsComponent } from './image-icons.component';

describe('ImageIconsComponent', () => {
  let component: ImageIconsComponent;
  let fixture: ComponentFixture<ImageIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageIconsComponent]
    });
    fixture = TestBed.createComponent(ImageIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
