import './style.css';

export default function OndropdownClick(){
    const descriptionInDropdown = document.getElementById('description').value;
    console.log(descriptionInDropdown);
    const descriptiontag = document.createElement('div');
    const titlebar = document.getElementsByClassName('titlebar');
    descriptiontag.innerText = descriptionInDropdown;
    titlebar[0].appendChild(descriptiontag);
}

