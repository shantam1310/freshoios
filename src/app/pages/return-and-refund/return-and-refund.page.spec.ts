import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnAndRefundPage } from './return-and-refund.page';

describe('ReturnAndRefundPage', () => {
  let component: ReturnAndRefundPage;
  let fixture: ComponentFixture<ReturnAndRefundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnAndRefundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnAndRefundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
