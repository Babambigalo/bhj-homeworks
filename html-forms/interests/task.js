const interests_active = Array.from(document.getElementsByClassName('interests_active'));
mainCheckBoxes = [];
interests_active.forEach((element)=>{
    mainCheckBoxes.push(element.previousElementSibling.children[0]);
})

mainCheckBoxes.forEach((element)=>{
    element.addEventListener('change',()=>{
        let ul = Array.from(element.closest('li').getElementsByClassName('interests_active'));
        let inputs = Array.from(ul[0].getElementsByClassName('interest__check')); 
        inputs.forEach((elem)=>{
            (element.checked) ? elem.checked = true : elem.checked = false;
        });
    });
})
 

