function user_details(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ roll: "21" });
    }, 2000);
  });
}

const fun = async () => {
  console.log("123");
  const result = await user_details("G8");
  console.log(result);
  console.log("78");
};

fun();
