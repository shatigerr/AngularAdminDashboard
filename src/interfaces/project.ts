type Task = {
    id:number,
    task:String
}

type Expense = {
    id:number,
    amount:number
}

export interface Project{
    id:number,
    name:String,
    description:String,
    tasks:Array<Task>,
    expenses:Array<Expense>

}


// let project:Project = {
//     id:1,
//     name:"Hola",
//     description:"adios",
//     tasks:[
//         {
//             id:1,
//             task:"hola"
//         }
//     ],
//     expenses:[
//         {
//             id:1,
//             amount:200.78
//         }
//     ]
// }
