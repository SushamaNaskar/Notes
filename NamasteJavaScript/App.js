let p1=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve('promise is resolved 1');
  },5000);
})

let p2=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve('promise is resolved 2');
  },10000);
})

async function handleA(){
  let val= await p1;
  console.log(val)
  console.log("line after await p1")

  let val2= await p2;
  console.log(val2)
  console.log("line after await p2")
};

handleA();
console.log("end");