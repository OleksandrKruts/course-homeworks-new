"use strict";

//Create a new Promise that lasts 5 seconds (using setTimeout) and performs the following actions:
// If it completes successfully (fulfilled), it should display the message “done”
// If an error occurs (rejected), it should log the error message to the console
// Regardless of the outcome, it should display the message “Promise was finished!”
// You must implement the Promise handler using two methods:

// .then / .catch
// async / await + try...catch

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("done");
    reject(new Error("Access denied"));
  }, 1000);
});

// .then/.catch
promise
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise was finished!"));

// .async/.await
async function getPromise() {
  try {
    let result = await promise;
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Promise was finished!");
  }
}

getPromise();
