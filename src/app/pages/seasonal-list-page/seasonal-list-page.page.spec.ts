import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeasonalListPagePage } from './seasonal-list-page.page';

describe('SeasonalListPagePage', () => {
  let component: SeasonalListPagePage;
  let fixture: ComponentFixture<SeasonalListPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonalListPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeasonalListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
