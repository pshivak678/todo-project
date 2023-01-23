import './style.css';
import generateUI from './first';
import addToList from './addToList';
import { onSubmit } from './project';
import Project from './last';
import { createProject } from './first';


function onLoad(){
    generateUI();
    addToList();
    const newNotesdiv = document.querySelector('.newnotes');
    newNotesdiv.style.display="none";
}

onLoad();


const newNotesdiv = document.querySelector('.newnotes');
const addBtn = document.querySelector('.addicon');
const submitBtn = document.querySelector('.submiticon');

addBtn.addEventListener('click',function(){
    newNotesdiv.style.display="grid";
})

submitBtn.addEventListener('click',onSubmit);









