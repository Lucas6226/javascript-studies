const multiplicationRequest = (n) =>
  new Promise((resolve, reject) => {
    // async (slow) code that will return a data for resolve() on line 10

    const err = false;
    if (err) {
      reject(new Error(err));
    }

    resolve((n *= 2));
  });


(async () => {
  try {
    let number = await multiplicationRequest(2);
    let finalNumber = await multiplicationRequest(number);
    console.log(finalNumber.toString());
  } catch (err) {
    console.log(err);
  }
})();

