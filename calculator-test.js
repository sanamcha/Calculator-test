
it('should calculate the monthly rate correctly', function () {
  const values ={amount: 50000, years:15, rate:3.5};
  expect(calculateMonthlyPayment(values)).toEqual('357.44');
});


it("should gives us low interst rates", function() {
  const values = { amount: 50000, years: 5, rate: 1.5};
  expect(calculateMonthlyPayment(values)).toEqual('865.49');
});

it("should gives us high interest rates", function(){
  const values = { amount: 50000, years: 50, rate: 25};
  expect(calculateMonthlyPayment(values)).toEqual('1041.67');
})

it("should gives us no interest rate", function(){
  const values = { amount: 50000, years: 1, rate: 0};
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
})


it("should gives us exact maonthly payment of $200", function(){
  const values ={ amount:20000 , years:10.5 , rate:4.555 };
  expect(calculateMonthlyPayment(values)).toEqual('200.00');
})



