let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  Promise.resolve(0).then(callThen());
  // setTimeout(() => {
  //   document.body.style.backgroundColor = "beige";
  //   console.log("hello beige");
  // }, 0);
  requestAnimationFrame(() => {
    document.body.style.backgroundColor = "orange";
    console.log("hello orange");
  });
});

function callThen() {
  console.log("then~~");
  document.body.style.backgroundColor = "red";
  // callThen();
}
