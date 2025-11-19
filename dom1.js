


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


