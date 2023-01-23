import './style.css';

export default function addToList(){
    const addList = document.querySelector('.addlist')
    const newNotes = document.createElement('div');
    newNotes.classList.add('newnotes');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv');
    const addTitle = document.createTextNode('Title:');
    var inputTitle = document.createElement("input");
    inputTitle.type='text';
    inputTitle.setAttribute('id','title');
    inputTitle.placeholder='add title';
    titleDiv.appendChild(addTitle)
    titleDiv.appendChild(inputTitle);
    newNotes.appendChild(titleDiv);
    addList.appendChild(newNotes);
    
    const descriptionDiv = document.createElement('div');
    const addDescription = document.createTextNode('Description:');
    var inputDescription = document.createElement("input");
    inputDescription.type='text';
    inputDescription.placeholder='add description';
    inputDescription.setAttribute('id','description');
    descriptionDiv.appendChild(addDescription)
    descriptionDiv.appendChild(inputDescription);
    newNotes.appendChild(descriptionDiv);
    addList.appendChild(newNotes);

    const dateDiv = document.createElement('div');
    const addDate = document.createTextNode('Date');
    var inputDate = document.createElement("input");
    inputDate.type='date';
    inputDate.placeholder='Date to be reminded';
    inputDate.setAttribute('id','date');
    dateDiv.appendChild(addDate)
    dateDiv.appendChild(inputDate);
    newNotes.appendChild(dateDiv);
    addList.appendChild(newNotes);

    const isimportantDiv = document.createElement('div');
    const addPriority = document.createTextNode('Is Important?');
    var inputCheck = document.createElement("input");
    inputCheck.type='checkbox';
    inputCheck.placeholder='Is Important?';
    inputCheck.setAttribute('id','isimportant');
    isimportantDiv.appendChild(addPriority)
    isimportantDiv.appendChild(inputCheck);
    newNotes.appendChild(isimportantDiv);
    addList.appendChild(newNotes);

    const submitIcon = document.createElement('div');
    submitIcon.classList.add('submiticon');
    submitIcon.innerHTML='<span class="material-symbols-outlined">rocket_launch</span>';
    newNotes.appendChild(submitIcon);
}