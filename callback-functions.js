function example() {
  console.log("Hello World");
}

// const example = function() {
//   console.log("Hello World");
// };

function onDownloadFinished() {
  console.log("Download finished");
}

function download(callback) {
  console.log("Download started");

  // const interval = setInterval(() => {
  //   callback();
  //   clearInterval(interval);
  // }, 1000);

  setTimeout(() => {
    callback();
  }, 4000);
}

// download(onDownloadFinished);

// download(function () {
//   console.log("Hello, I am finished!");
// });

download(() => {
  console.log("Hej, I am an arrow function");
});
