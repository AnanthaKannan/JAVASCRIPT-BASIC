const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach((draggable) =>{
    draggable.addEventListener('dragstart', ()=>{
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragstart', ()=>{
        draggable.classList.remove('dragging');
    });
});

containers.forEach((container) =>{
    container.addEventListener('dragover', () =>{
        
    })
});