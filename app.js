
const dropdownList = document.querySelectorAll('.dropdown-list');


dropdownList.forEach(function(item){
  const a = item.querySelector('#toggle');
  
  a.addEventListener("click", function(){
    dropdownList.forEach(function(items){
       if ( items !== item){
        items.lastElementChild.classList.remove("sublist-toggle");
        items.firstElementChild.lastElementChild.classList.remove("arrow-down")
    }
    })

    a.nextElementSibling.classList.toggle("sublist-toggle");
    a.lastElementChild.classList.toggle("arrow-down")
  })
})













// arrows.forEach(function(arrow){
    
//  const btn = arrow.querySelector('.sublist');
//  console.log(btn)
 
//  arrow.addEventListener("click", function toggleDropdown(e){
//    //arrows.forEach(function(arr){
//    const tst = e.currentTarget.nextElementSibling
//    console.log(tst);

// tst.classList.toggle("sublist-toggle");



//   if(e.nextElementSibling !== tag){
//         tag.classList.remove(`sublist-toggle`); 
//     }
//     })
  
//     tag.classList.toggle(`sublist-toggle`);   
//});
//  const tag = arrow.nextElementSibling; 
 //} );

//console.log(e.currentTarget)
