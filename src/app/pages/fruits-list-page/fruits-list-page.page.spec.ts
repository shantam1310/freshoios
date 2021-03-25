import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FruitsListPagePage } from './fruits-list-page.page';

describe('FruitsListPagePage', () => {
  let component: FruitsListPagePage;
  let fixture: ComponentFixture<FruitsListPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsListPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FruitsListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
