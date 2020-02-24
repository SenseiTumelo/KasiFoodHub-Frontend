import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrontAdminGhostPage } from './front-admin-ghost.page';

describe('FrontAdminGhostPage', () => {
  let component: FrontAdminGhostPage;
  let fixture: ComponentFixture<FrontAdminGhostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontAdminGhostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrontAdminGhostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
