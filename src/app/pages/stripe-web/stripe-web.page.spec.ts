import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StripeWebPage } from '../stripe-web/stripe-web.page';

describe('StripeWebPage', () => {
  let component: StripeWebPage;
  let fixture: ComponentFixture<StripeWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeWebPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
