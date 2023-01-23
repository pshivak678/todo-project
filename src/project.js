import './style.css';
import OndropdownClick from './dropdownClick';


export function onSubmit(){
    const title = document.getElementById('title').value;
    const projectbar = document.querySelector('.leftpanel');
    const titlebar = document.createElement('div');
    const dropdownIcn = document.createElement('div');
    const titleName = document.createElement('div');
    dropdownIcn.innerHTML='<span class="material-symbols-outlined">arrow_drop_down_circle</span>';
    dropdownIcn.classList.add('dropdownicn');
    titlebar.classList.add('titlebar');
    localStorage.setItem('Title',JSON.stringify(title));
    titleName.innerText= localStorage.getItem('Title');
    titlebar.appendChild(titleName);
    titlebar.appendChild(dropdownIcn);
    projectbar.appendChild(titlebar);
    console.log(dropdownIcn);
    dropdownIcn.addEventListener('click',OndropdownClick);
}


