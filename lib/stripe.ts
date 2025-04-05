// This is a mock Stripe service
// In a real application, this would use the actual Stripe SDK

export async function createPaymentIntent(amount: number, currency = "usd") {
  // In a real app, this would call the Stripe API
  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: Math.round(amount * 100), // Convert to cents
  //   currency,
  //   automatic_payment_methods: {
  //     enabled: true,
  //   },
  // })

  // For demo purposes, we'll just return a mock client secret
  return {
    clientSecret: `pi_mock_${Math.random().toString(36).substring(2, 15)}_secret_${Math.random().toString(36).substring(2, 15)}`,
  }
}

export async function createSetupIntent() {
  // In a real app, this would call the Stripe API
  // const setupIntent = await stripe.setupIntents.create({
  //   payment_method_types: ['card'],
  // })

  // For demo purposes, we'll just return a mock client secret
  return {
    clientSecret: `seti_mock_${Math.random().toString(36).substring(2, 15)}_secret_${Math.random().toString(36).substring(2, 15)}`,
  }
}

export async function retrievePaymentMethod(paymentMethodId: string) {
  // In a real app, this would call the Stripe API
  // return await stripe.paymentMethods.retrieve(paymentMethodId)

  // For demo purposes, we'll just return a mock payment method
  return {
    id: paymentMethodId,
    type: "card",
    card: {
      brand: "visa",
      last4: "4242",
      exp_month: 12,
      exp_year: 2025,
    },
    billing_details: {
      name: "John Doe",
    },
  }
}

