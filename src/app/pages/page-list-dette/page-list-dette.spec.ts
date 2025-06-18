import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListDette } from './page-list-dette';

describe('PageListDette', () => {
  let component: PageListDette;
  let fixture: ComponentFixture<PageListDette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListDette]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListDette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
