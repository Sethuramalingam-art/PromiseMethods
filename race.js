// Promise.any()
//if all promises resolves means it will give first resolve value dont wait for others
// Doesnot matter reject or resolve it will give first resolve value. It will give resolve as prirorites
//if all the promises are rejected means it will give aggregate rror like below
// [AggregateError: All promises were rejected] {
//     [errors]: [ 'Async Task', 'Async Task1', 'Async Task2' ]
//   }
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Async Task");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Async Task1");
  }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Async Task2");
  }, 3000);
});

Promise.any([promise1, promise2, promise3])
  .then((res) => {
    console.log(res); // it will return Async Task2 because it resolve first so other promises are never triggered
  })
  .catch((error) => {
    console.log(error);
  });

//Promise.race()
// if all promises resolves means it will give first resolve value dont wait for others
// like promise.any() it won't check after reject any resolve are there. if reject receievd first it will return reject but promise.any is check
// after reject y first resolve are there.
//if all the promises are rejected means it will give throw first rejected value
//   }
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Async Task");
  }, 1000);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Async Task1");
  }, 5000);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Async Task2");
  }, 3000);
});

Promise.race([promise4, promise5, promise6])
  .then((res) => {
    console.log(res); // it will return Async Task2 because it resolve first so other promises are never triggered
  })
  .catch((error) => {
    console.log(error);
  });
