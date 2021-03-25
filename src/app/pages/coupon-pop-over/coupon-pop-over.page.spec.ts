import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CouponPopOverPage } from './coupon-pop-over.page';

describe('CouponPopOverPage', () => {
  let component: CouponPopOverPage;
  let fixture: ComponentFixture<CouponPopOverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponPopOverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CouponPopOverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
