const multiplicationRequest = (n) =>
  new Promise((resolve, reject) => {
    // async (slow) code that will return a data for resolve() on line 10

    const err = false;
    if (err) {
      reject(new Error(err));
    }

    resolve((n *= 2));
  });


multiplicationRequest(2)
  .then((n) => {
    console.log(n)
    return multiplicationRequest(n)
  })
  .then((n) => {
    console.log("--"+ n +"--");
  })
  .catch((err) => {
    console.log(err);
  });
