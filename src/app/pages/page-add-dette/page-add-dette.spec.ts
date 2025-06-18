import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddDette } from './page-add-dette';

describe('PageAddDette', () => {
  let component: PageAddDette;
  let fixture: ComponentFixture<PageAddDette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAddDette]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddDette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
