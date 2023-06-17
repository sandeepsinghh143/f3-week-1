let empData =[];
let button=document.getElementById("add-btn");
let nameInput=document.getElementById("name-input");
let profession=document.getElementById("profession");
let age=document.getElementById("age");
let warning=document.getElementById("warning");
let empCount=document.getElementById("count");
let details=document.getElementById("details");
button.addEventListener("click",addUser);
function addUser(event){
    event.preventDefault();
if(nameInput.value.trim()!='' && age.value.trim()!=''&& profession.value.trim()!=''){
    warning.innerText="Success : Employee Added!";
    warning.style.color="green";
    empCount.style.display="none";
    let Employee={id:empData.length+1,name:nameInput.value,profession:profession.value,age:age.value};
    empData.push(Employee);
    let empContainer = document.createElement("div");
    empContainer.className="main-div";
    let deleteButton = document.createElement("button");
    deleteButton.innerText="Delete User";
    deleteButton.className="delete";
    let employeeDiv = document.createElement("div");
    employeeDiv.className="employee-details";
    let idDiv=document.createElement('div');
    idDiv.innerText=Employee.id+".";
    let nameDiv=document.createElement('div');
    nameDiv.innerText="Name : "+Employee.name;
    let professionDiv=document.createElement('div');
    professionDiv.innerText="Profession : "+Employee.profession;
    let ageDiv=document.createElement('div');
    ageDiv.innerText="Age : "+Employee.age;
    
    employeeDiv.append(idDiv);
    employeeDiv.append(nameDiv);
    employeeDiv.append(professionDiv);
    employeeDiv.append(ageDiv);
    
    empContainer.append(employeeDiv);
    empContainer.append(deleteButton);
    details.append(empContainer);
    nameInput.value="";
    profession.value="";
    age.value="";

    let deleteButtons = document.getElementsByClassName("delete");
for(let i=0;i<deleteButtons.length;i++){
    deleteButtons[i].addEventListener("click",function(event){
        event.target.parentNode.remove();
    });
    
}
}else{
    warning.innerText="Error : Please Make sure All the fields are filled before adding in an Employee!";
    warning.style.color="red";
}
}


