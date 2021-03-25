import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InnersurjanPage } from './innersurjan.page';

describe('InnersurjanPage', () => {
  let component: InnersurjanPage;
  let fixture: ComponentFixture<InnersurjanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnersurjanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InnersurjanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
