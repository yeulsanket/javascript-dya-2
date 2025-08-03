// let obj = {
//     key1 : "value1",
//     key2 : "value2",
//     key3 : "value3",
//     key4  : "value4"
// }
// console.log(obj);
// obj.key1 = "hello";
// console.log(obj);
// Object.freeze(obj);
// obj.key1 = "hello2";
// console.log(obj);
// Object.seal(obj);
// obj.key1 = "bollo";
// console.log(obj);



// let obj2 = {
//     key5 :"value5";
//     key6 :"value6";

// }



let obj = { 
    
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
    key4  : "value4"

}
Object.keys(obj);
for (let a in obj ){
    console.log(obj[a]);
    

}

Object.keys(obj).forEach((val)=>{console.log(val,obj[val])})