// console.log(document.body.children[0].innerText='Hello to dom1 chnge by dom' )

//creating object using DOM-js  
//  const student={
//     name:'tiya',
//     place:'chennai',

//   greetUser(){
//         return `Hi My name is ${this.name} and coming from ${this.place}. This msg is created using js object and function`
//     }
 
//  }
//     // student.name='Taniya'
//     // student.place='coonor'

//     // student.name='Riya'
//     // student.place='ooty'
//     const userName=prompt('Enter your name')
//    const userPlace= prompt('enter your place')
//   //assiging the username,userplace(value) to name and place varibles
//    student.name=userName
//    student.place=userPlace


//  const greet=student.greetUser()
//  console.log(greet) //-->console.log() method
// document.write(greet) //--> display the return statement in document viewport  ---> write() method
// document.body.innerText=greet //-->innertext
// document.body.innerText='Hi this msg is crated using innertext'
 //-->innertext: this replace the student block node to the text present inside the inntertext
// document.body.innerHTML='<h1>THsi is created using innerHTML</h1>'
//-->this completely replace the previous set of block to new block with its content

// console.log(document.documentElement.lang)


// js for foodwish

let foodinput = document.getElementById('foodinput')
let foodinputBtn = document.getElementById('foodinput-btn')
let itemList= document.getElementById('item-list') //ul
let main = document.getElementById('hero')

foodinputBtn.addEventListener('click',()=>{
   // alert(`I am clicked ${foodinput.value}`);
   const li=document.createElement('li')
   li.className='food-item'
   li.textContent=foodinput.value
   itemList.append(li) 
   console.log(itemList);

   const newDiv = document.createElement('div')
   newDiv.textContent=' 🎉 Successfully item is added!'
   newDiv.className='alert'
   main.prepend(newDiv)
   // console.log(main);
})


