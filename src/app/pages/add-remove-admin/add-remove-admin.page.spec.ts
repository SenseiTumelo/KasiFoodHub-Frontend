import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRemoveAdminPage } from './add-remove-admin.page';

describe('AddRemoveAdminPage', () => {
  let component: AddRemoveAdminPage;
  let fixture: ComponentFixture<AddRemoveAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRemoveAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
