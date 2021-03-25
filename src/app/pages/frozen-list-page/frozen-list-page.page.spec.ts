import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrozenListPagePage } from './frozen-list-page.page';

describe('FrozenListPagePage', () => {
  let component: FrozenListPagePage;
  let fixture: ComponentFixture<FrozenListPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrozenListPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrozenListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
