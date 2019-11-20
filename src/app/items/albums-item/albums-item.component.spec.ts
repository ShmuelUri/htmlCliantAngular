import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsItemComponent } from './albums-item.component';

describe('AlbumsItemComponent', () => {
  let component: AlbumsItemComponent;
  let fixture: ComponentFixture<AlbumsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
