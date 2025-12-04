function fun1(id, fun2) {
  console.log(id);
  fun2("123");
}

function fun2(roll, fun3) {
  console.log(roll);
  fun3("G8");
}

function fun3(sub) {
  console.log(sub);
  console.log(92);
}

fun1(1, function (roll) {
  fun2(roll, function (sub) {
    fun3(sub);
  });
});
