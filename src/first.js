import './style.css';

export default function generateUI() {
    const mainDiv = document.querySelector('.main-div')
    const leftPanelContent = document.createElement('div');
    leftPanelContent.classList.add('leftpanel');
    leftPanelContent.innerHTML='Project <span class="material-symbols-outlined">add</span>';
    mainDiv.appendChild(leftPanelContent);

    const addList = document.createElement('div');
    addList.classList.add('addlist');
    addList.innerText = "Add Remainder";
    mainDiv.appendChild(addList);

    const addIcon = document.createElement('div');
    addIcon.classList.add('addicon');
    addIcon.innerHTML = '<span class="material-symbols-outlined">add</span>';
    addList.appendChild(addIcon);
}


