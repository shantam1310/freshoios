import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiaryListPagePage } from './diary-list-page.page';

describe('DiaryListPagePage', () => {
  let component: DiaryListPagePage;
  let fixture: ComponentFixture<DiaryListPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryListPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiaryListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
