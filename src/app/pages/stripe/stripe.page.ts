import { Component } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stripe',
  templateUrl: 'stripe.page.html',
  styleUrls: ['stripe.page.scss'],
})
export class StripePage {
  paymentAmount = '3.33';
  currency = 'USD';
  currencyIcon = '$';
  // tslint:disable-next-line: variable-name
  stripe_key = 'YOUR_STRIPE_PUBLISHABLE_KEY';
  cardDetails: any = {};

  constructor(private stripe: Stripe, private http: HttpClient, private route: Router) {
  }

  payWithStripe() {
    this.stripe.setPublishableKey(this.stripe_key);

    this.cardDetails = {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2020,
      cvc: '220'
    };

    this.stripe.createCardToken(this.cardDetails)
      .then(token => {
        console.log(token);
        this.makePayment(token.id);
      })
      .catch(error => console.error(error));
    this.route.navigate(['stripe-web']);
    }

  makePayment(token) {
    this.http
      .post('https://us-central1-shoppr-c97a7.cloudfunctions.net/payWithStripe', {
        token: token.id
      })
      .subscribe(data => {
        console.log(data);
      });
  }

}
