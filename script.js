const item =document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
item.addEventListener(
    "keyup",//jaise jaise user likhega kuchh hm ek fxn chalayenge
    function(event){//fxn m jo event ho rha h wo hm event naam k variable m get krenge
        if(event.key=="Enter"){
            addToDo(this.value)//jaise hi enter press hoga -->wo value console m print hogi
            this.value=""  //aur wohaan se empty kra denge-->aur wohaan se list item m add kra denge
         }
    }
)
const addToDo=(item)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`
   ${item}
    <i class="fas fa-times"></i>  
    `;
 listItem.addEventListener('click', function(){
    this.classList.toggle("done");
 })
listItem.querySelector("i").addEventListener(
    "click",
    function(){
        listItem.remove()
    }
)
 toDoBox.appendChild(listItem);
}