import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemoveAddAdminPage } from './remove-add-admin.page';

describe('RemoveAddAdminPage', () => {
  let component: RemoveAddAdminPage;
  let fixture: ComponentFixture<RemoveAddAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAddAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveAddAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
