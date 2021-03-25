import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExoticListPage } from './exotic-list.page';

describe('ExoticListPage', () => {
  let component: ExoticListPage;
  let fixture: ComponentFixture<ExoticListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoticListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExoticListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
