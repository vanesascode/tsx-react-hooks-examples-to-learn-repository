function returnedPromiseHere() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I am the images coming from the database");
    }, 1000);
  });
}
async function useAsyncFunction() {
  console.log("I am a fast task");
  var result = await returnedPromiseHere();
  console.log(result);
  console.log("I had to wait for await to finish");
}
useAsyncFunction();

const PromiseAsync = () => {
  return <div></div>;
};

export default PromiseAsync;
