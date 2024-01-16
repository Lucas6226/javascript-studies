function getUserInfos(user, onSuccess, onError) {
  setTimeout(() => {
    // fake slow process

    var error = false;
    if (error) {
      // error detection
      return onError(new Error("error" + error));
    }

    onSuccess({ name: user, email: "lucas@gmail.com", password: "1234" }); // called at the final of proces
  }, 1000);
}

getUserInfos(
  "lucas",
  (inf) => {
    console.log(inf);
  },
  (error) => {
    console.log(error);
  }
);
