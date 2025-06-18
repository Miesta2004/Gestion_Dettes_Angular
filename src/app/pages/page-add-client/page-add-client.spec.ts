import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddClient } from './page-add-client';

describe('PageAddClient', () => {
  let component: PageAddClient;
  let fixture: ComponentFixture<PageAddClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAddClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
