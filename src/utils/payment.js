import {PaymentRequest} from 'react-native-payments';

export const payByApple = (price = 9.99) => {
  const total = {
    label: 'total',
    amount: {
      currency: 'USD',
      value: price,
    },
  };
  const displayItems = [
    {
      label: 'Order Payment',
      amount: {
        currency: 'USD',
        value: price,
      },
    },
  ];
  const details = {
    displayItems,
    total,
  };
  const APP_APPLE_PAY = [
    {
      supportedMethods: ['apple-pay'],
      data: {
        merchantIdentifier: 'merchant.com.your-app.namespace',
        supportedNetworks: ['visa', 'mastercard', 'amex'],
        countryCode: 'US',
        currencyCode: 'USD',
      },
    },
  ];

  const pr = new PaymentRequest(APP_APPLE_PAY, details);

  return pr;
};
