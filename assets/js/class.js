

"use strict"


// let fullName = "Qedirli Cavidan";

// console.log(fullName.replace("Qedirli", "Nuraliyev"));

// let stu1 = {
//     name: "Togrul",
//     surname: "Quluzade",
//     Age: 23,
//     phoneNumbers:[334455,667788],
//     groups:[{
//         name: "p130",
//         room: "Sirius",
//         teachers:[{
//             name:"Cavid",
//             age:28
//         },
//         {
//             name:"Rovshen",
//             age:22
//         }

//         ]
//     },
//     {
//         name: "p120",
//         room: "Pluton",
//         teachers:["Cavid","Gulnar"]
//     }]

// }

// for (const item of stu1.groups) {
//     if (item.name == "p130") {
//         for (const teacher of item.teachers) {   
//             if (teacher.name == "Cavid") {
//                 console.log(`${teacher.name}-${teacher.age}`)
//             }
//         }
//     }
// }

// let teacherFullData = ()=>{
//     for (const item of stu1.groups) {
//         if (item.name == "p130") {
//             for (const teacher of item.teachers) {
//                 if (teacher.name == "Cavid") {
//                     return (`${teacher.name}-${teacher.age}`)
//                 }
//             }
//         }
//     }
// }

// //console.log(teacherFullData());

// let setGroupTeacher = (groupName)=>{
//     let teacherData = teacherFullData();

//     return `${teacherData} ${groupName}`;
// }

// let group = "p130";

// console.log(setGroupTeacher(group))

// for (const item of stu1.groups) {
//     if (item.name == "p130") {
//         console.log(item.teachers);
//     }
// }



// for (const item of stu1.groups) {
//     if (item.room == "Sirius") {
//         console.log(item.name);
//     }
// }


//console.log(stu1.phoneNumbers);

// for (const item of stu1.phoneNumbers) {
//     if (item == 334455) {
//         console.log(stu1.name);
//     }
// }

// let isExcist = stu1.phoneNumbers.includes(667788);

// if (isExcist) {
//     console.log("excist");
// }else{
//     console.log("No excist");
// }

// let stu1 = {
//     name: "Togrul",
//     surname: "Quluzade",
//     Age: 23
// }



// let stu2 = {
//     name: "Seid",
//     surname: "Nuraliyev",
//     Age: 33
// }
// let stu3 = {
//     name: "Mirsamir",
//     surname: "Ezimzade",
//     Age: 22
// }


// let students = [stu1, stu2 ,stu3];

// for (const item of students) {
//     console.log(item);
//     console.log(item.name + " " + item.surname + "-" + item.Age);
// }


// let stu1 = {
//     id:1,
//     name:"Togrul",
//     surname: "Quluzade",
// }
// let stu2 = {
//     id:2,
//     name:"Ramil",
//     surname: "Binnetov",
// }
// let stu3 = {
//     id:3,
//     name:"Emil",
//     surname: "Abdullayev"
// }
// let stu4 = {
//     id:4,
//     name:"Seadet",
//     surname: "Murseliyeva"
// }


// let group = {
//     name: "P130",
//     capacity: 5,
//     students: [],
//     addStudent: function (stu) {

//         let student = this.students.filter(m=>m.id == stu.id);
//         if (student.length != 0) {
//             return console.log("Already excist")

//         }


//         // let student = this.students.find(m=>m.id == stu.id);
//         // if (student != undefined) {
//         //     return console.log("Already excist")

//         // }

//         if (this.students.length != this.capacity) {
//            this.students.push(stu)
//            return;
            
//         }else{
//             console.log("Array is full")
//         }

       
//     }
// }

// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);
// group.addStudent(stu4);

// console.log(group.students);




// let group = {
//     name: "P130",
//     capacity: 5,
//     students: [],
//     addStudent: function (stu) {


//         if (this.students.length != group.capacity) {
//            return this.students.push(stu)
            
//         }else{
//             console.log("Array is full")
//         }

       
//     }
// }







// group.addStudent("Seid");
// group.addStudent("Orxan");
// group.addStudent("Emil");
// group.addStudent("Sadiq");
// group.addStudent("Eshqin");
// group.addStudent("Cavidan");
// group.addStudent("Ramil");


// console.log(group.students);


// function Book(name,author){
//     this.name = name;
//     this.author = author;

//     function grtFullData(){
//     console.log(name + " " + author);
//    }
// }

// let book =new Book("Xosrov","Nizami")


// Book.prototype.pageCount = 55;

// Book.prototype.getAuthor = function(){
//     console.log(this.author)
// }

// console.log(book);  


// class Person{
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     getFullName(){
//         console.log(this.name + " " + this.surname)
//     }
// }


// class Employee  extends Person{
 
// }

// let employee = new Employee("Seid","Nuraliyev")

// employee.getFullName()

// console.log(employee.surname)


