import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDataTableViewComponent } from './transactions-data-table-view.component';

describe('TransactionsDataTableViewComponent', () => {
  let component: TransactionsDataTableViewComponent;
  let fixture: ComponentFixture<TransactionsDataTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsDataTableViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsDataTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
