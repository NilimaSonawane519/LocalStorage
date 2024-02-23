// localStorage.setItem("name",'')

let form=document.querySelector("form");
let main=document.querySelector(".main");
form.addEventListener('submit',(event)=>{
            console.log(event);
        let name=event.target.uname.value;
        let email=event.target.email.value;
        let phone=event.target.phone.value;
        var userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];
        userData.push({
            'name':name,
            'email':email,
            'phone':phone

        });

        localStorage.setItem("userDetails",JSON.stringify(userData));
        form.target.reset();
        displayData();
        event.preventDefault();
 });

 let displayData=()=>{
    var userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];
    var finalData='';
    userData.forEach((element,i) => {
        finalData +=`<div class="items">
        <span onclick="removeData(${i});">&times</span>
        <h5>Name</h5>
        <div>${element.name}</div>
        <h5>Email</h5>
        <div>${element.email}</div>
        <h5>PhoneNo</h5>
        <div>${element.phone}</div>
    </div>`
    
    });
    //console.log(finalData);
     main.innerHTML=finalData;

 }

 let removeData=(index)=>{
    let userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];
    userData.splice(index,1);
    localStorage.setItem("userDetails",JSON.stringify(userData));

    displayData();
 }
 displayData();