import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExoticVegetableDetailPage } from './exotic-vegetable-detail.page';

describe('ExoticVegetableDetailPage', () => {
  let component: ExoticVegetableDetailPage;
  let fixture: ComponentFixture<ExoticVegetableDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoticVegetableDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExoticVegetableDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
