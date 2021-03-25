import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExoticVegetableListPage } from './exotic-vegetable-list.page';

describe('ExoticVegetableListPage', () => {
  let component: ExoticVegetableListPage;
  let fixture: ComponentFixture<ExoticVegetableListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoticVegetableListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExoticVegetableListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
