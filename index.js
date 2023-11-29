 function show()
 {
    var list1=["Accountant Career Path",
               "Neurologist Career Path",
               "Executive Producer Career Path",
               "Actuary Career Path",
               "Copywriter Career Path"
             ];

             var list2=[" Career Path",
               "Neurologist Career Path",
               "Executive Producer Career Path",
               "Actuary Career Path",
               "Copywriter Career Path"
             ];
             var list3=["  Path",
               "Neurologist Career Path",
               "Executive Producer Career Path",
               "Actuary Career Path",
               "Copywriter Career Path"
             ];
         
            var point=document.getElementById("point")
            var display=document.createElement("div")
            display.className="display"
            point.appendChild(display);
            var ul =document.createElement("ul")
            ul.className="list1";
            var ul1 =document.createElement("ul")
            ul1.className="list2";
            var ul2 =document.createElement("ul")
            ul2.className="list3";

          
             
             for(var i=0;i<5;i++)
             {
                var ull1 =document.createElement("li")
                ul.appendChild(ull1)
                ull1.innerText=list1[i];
             }
             display.appendChild(ul)
             for(var i=0;i<5;i++)
             {
                 var ull2 =document.createElement("li")
                ul.appendChild(ull2)
                ull2.innerText=list2[i]; 
             }
             display.appendChild(ul1)

 }

 function sign()
 {
    window.location.href="./Resources/sign.html"
 }

function addUser(m,p) {
this.mail = m;
this.password = p;
}

let users = [];
 function signup()
 {
     event.preventDefault();
     let mail = document.getElementById("mail").value;
     let pass = document.getElementById("password").value;

     let userDetails = JSON.parse(localStorage.getItem("login_details"));

     let usernow = {
         email: mail,
         loc: "Kolkata"
     }

    localStorage.setItem("userNow", JSON.stringify(usernow));

    if (userDetails === null) 
    {
        localStorage.setItem("login_details", JSON.stringify(users));
    }

    if(mail === '' || pass === '') {
        alert('Enter a valid email and password!')
    }
    else if(pass.length < 8) {
        alert('Password should be atleast 8 characters.');
    }
    else if (userDetails.some( good => good['mail'] === mail)) {
        alert("User already registered!")
    } else {
        users.push(new addUser(mail, pass));
        localStorage.setItem("login_details", JSON.stringify(users));
        usernow = mail;  
        alert("Signup Successful!");
        window.location.href = "./Home-Page/homeIndex.htm"
    }
 }

function check() {
    let subb = document.getElementById("continueEmail");
    subb.style.cursor = "pointer";
    subb.setAttribute('disabled', false);
}