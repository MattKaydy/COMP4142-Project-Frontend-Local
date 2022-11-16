import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDataCardViewComponent } from './block-data-card-view.component';

describe('BlockDataCardViewComponent', () => {
  let component: BlockDataCardViewComponent;
  let fixture: ComponentFixture<BlockDataCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockDataCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockDataCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
