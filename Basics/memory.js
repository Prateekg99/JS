// Stack (primitive), Heap (non-primitive)


// stack memory primitive data type ka data store krti hai 
// jb isko copy kiya jata hai toh iska refrence copy hota hai or main veriabels ko value change nhi hoti hai.
let MyName = "Prateek";
let yourName = MyName;
yourName="bobby";
console.log(yourName);
console.log(MyName)


//Heap memory Non-primitive data type ka data store krti hai like function, array, Object etc. 
// jjb hm iske data ko copy krte hai toh "Heap memory" hme orignal data ko copy krna allow krta hai jisse hm main veriabel ke data main change kra skte hai
let CollageName ={
    name : "Rohit",
    age:25
}

let DemoName = CollageName;
DemoName.age = 28;
// console.log(CollageName);
// console.log(DemoName);