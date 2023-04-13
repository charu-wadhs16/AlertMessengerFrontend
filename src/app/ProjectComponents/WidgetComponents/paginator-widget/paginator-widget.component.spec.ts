import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorWidgetComponent } from './paginator-widget.component';

describe('PaginatorWidgetComponent', () => {
  let component: PaginatorWidgetComponent;
  let fixture: ComponentFixture<PaginatorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
