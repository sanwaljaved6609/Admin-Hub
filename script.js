const allSideMenu = document.querySelector('#sidebar .side-menu.top li a');
allSideMenu.forEach(item=>{
    const li = item.parentElement;

    item.addEvenListener('click',function(){
        allSideMenu.forEach(i=>{
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});