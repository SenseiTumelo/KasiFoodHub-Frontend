import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StripeWebPage } from './stripe-web.page';

describe('StripeWebPage', () => {
  let component: StripeWebPage;
  let fixture: ComponentFixture<StripeWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeWebPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StripeWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
