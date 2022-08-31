import './style.scss'
import * as bootstrap from 'bootstrap';


let sidebar = document.getElementById('sidebar');
let showSidebar = document.getElementById('showSidebar');
showSidebar.addEventListener("click", function (){
    console.log(" san kyi tar")
    sidebar.classList.toggle('show')
})
