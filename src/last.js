import './style.css';

export default class Project{
    constructor(title,description,date){
            this.title = title;
            this.description = description;
            this.date = date;
    }
}

export function OndropdownClicking(){
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    // const isimportant = document.getElementById('isimportant').value
    const newProject = new Project(title,description,date);
    const descriptionProject = document.createElement('div');
    descriptionProject.classList.add('desc');
    descriptionProject.innerText = newProject.description;
    
}

