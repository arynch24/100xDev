// // // let a =10;
// // // {
// // //     let a =20;
// // // }
// // // console.log(a);

// // const user = {
// //     name: "Aryan Chauhan",
// //     age: "20"
// // }

// // user={
// //     name: "Nikhil Chauhan",
// //     age: "20"
// // }
// // console.log(user)


// console.log(typeof (undefined))
// {
//     const name = "Aryan"

// }
// console.log(name)

// makeCofee("sugar")

// var makeCofee =  (a)=> {
//     console.log("Adding " + a);
// }

const user={
    name:"Aryan",
    age:20,
    address:{
        city:"Delhi",
        state:"Delhi"
    },
}



const user2={...user};

user2.name="Nikhil";
user2.address.city="Noida";

console.log(user)
console.log(user2)
