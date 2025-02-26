setTimeout(() => {
  console.log(1);
  process.nextTick(() => {
    console.log("process1");
  });
  Promise.resolve().then((res) => {
    console.log("promise1");
  });
  setTimeout(() => {
    console.log(3);
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
}, 0);

setTimeout(() => {
  console.log(2);
  process.nextTick(() => {
    console.log("process1");
  });
  Promise.resolve().then((res) => {
    console.log("promise1");
  });
}, 0);
