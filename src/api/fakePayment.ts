const fakePayment = (success: boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Payment successful");
      } else {
        reject("Payment failed");
      }
    }, 1000); // 가상의 지연을 위해 1초로 설정
  });
};

export default fakePayment;
