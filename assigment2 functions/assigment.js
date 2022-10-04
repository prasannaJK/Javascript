const task3Element = document.getElementById('task-3');

//function1
function Hello(){
    alert("Welcome To Coitraining!");
}

//function2
function user(name){

alert('How are you ' + name );    
}

//function3
function dateOfJoining(date,month,year){
    const DOj = date + '-' + month + "-" + year;
    return DOj;

}
//calling the functions
Hello();
user("Prasanna");

//addListener 
task3Element.addEventListener('click', Hello);

const DOj = dateOfJoining('13','Sep','2022');

alert("Your date of Joining is " + DOj);

