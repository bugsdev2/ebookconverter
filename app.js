const execSync = require('execSync');
const form = require('formidable');


const fileUpload = document.querySelector('#file-upload');
const submit = document.querySelector('#submit-button');
const ul = document.querySelector('#booklist');
const convertButton = document.querySelector('#convert');

const filesArr = [];

submit.addEventListener('click', function(e){
    e.preventDefault();
    if(ul.childElementCount == 0) {
        for(let i=0;i<fileUpload.files.length;i++) {
            filesArr.push(fileUpload.files[i].name);
        }
        filesArr.forEach(item => {
            
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        
        })
    }
    

    if(ul.childElementCount != 0) {
        convertButton.setAttribute('style', "display: block;")
    }
})