function fun1(id){
    return Promise((resolve,reject) => {
        resolve("G8");
    })
}

function fun2(roll){
    return Promise((resolve ,reject) =>{
        resolve("eng");
    })
}

function fun3(sub){
    return Promise((resolve,reject) =>{
        resolve(93);
    })
}

fun1("123").then((result) =>{
   return fun2({result.roll}).then((result) =>{
    return fun3(result.sub)
   }
}).then((result) =>{
    console.log(result)
}
.catch((error) =>{
    console.log(error);
})
