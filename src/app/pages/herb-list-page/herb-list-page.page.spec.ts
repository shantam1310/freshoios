import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HerbListPagePage } from './herb-list-page.page';

describe('HerbListPagePage', () => {
  let component: HerbListPagePage;
  let fixture: ComponentFixture<HerbListPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbListPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HerbListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
