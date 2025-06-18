import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetteDetail } from './page-dette-detail';

describe('PageDetteDetail', () => {
  let component: PageDetteDetail;
  let fixture: ComponentFixture<PageDetteDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetteDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDetteDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
