// Promise methods
// Promise.all
// Promise.allsettled
// Promise.race
// Promise.any

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async Task");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Async Task1");
  }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async Task2");
  }, 3000);
});

Promise.allSettled([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error); // it will return Async Task2 because it reject first so other promises are never triggered
  });

//for Promise.all
// all promise reovled means it should return
["promise1 result", "promise2 result", "promise3 result"][
  // any one of the promise reject means it should retunr
  "failed promise return"
][
  //for Promise.allsettled
  // doesnot matter resolve or reject it will return status only like below
  // if all promise resolved
  ({ status: "fulfilled", value: "Async Task" },
  { status: "fulfilled", value: "Async Task1" },
  { status: "fulfilled", value: "Async Task2" })
][
  //if anyone promise rejected
  ({ status: "fulfilled", value: "Async Task" },
  { status: "rejected", reason: "Async Task1" },
  { status: "fulfilled", value: "Async Task2" })
];
