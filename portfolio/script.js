function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
















var nameError= document.getElementById('name-error');
var SubjectError= document.getElementById('subject-error');
var emailError= document.getElementById('email-error');
var messageError= document.getElementById('message-error');
var submitError= document.getElementById('submit-error');


function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length < 5) {
        nameError.innerHTML = 'Name more than 4 letters';
        return false;
    }
    if (!name.match(/^[a-zA-Z\s]+$/)) {
        nameError.innerHTML = 'Enter a valid full name';
        return false;
    }

    nameError.innerHTML = 'valid ✔';
    nameError.style.color='green'
    return true;
}


function validateSubject(){


        var subject = document.getElementById('contact-subject').value;

        if(subject.length == 0){

            SubjectError.innerHTML = 'Subject is required';

            return false;

        }

        if(subject.length < 5){

            SubjectError.innerHTML = 'required 5 more letters';

            return false;

        }

        SubjectError.innerHTML = 'valid ✔';
        SubjectError.style.color='green';

        return true;

}


function validateEmail(){


    var email = document.getElementById('contact-email').value;


    if(email.length == 0){

        emailError.innerHTML = 'Email is required';
        return false;

    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

        emailError.innerHTML = 'Email Invalid';

        return false;

    }

    emailError.innerHTML = "valid ✔";
    emailError.style.color='green';
    return true;


}


function validateMessage(){

   

        var message = document.getElementById('contact-message').value;
        var required = 30;
        var left = required - message.length;

        if(left > 0){
            messageError.innerHTML = left + 'more characters required';
            return false;
        }

        messageError.innerHTML = "valid ✔";
        messageError.style.color ='green'
        return true;

    }

function sentEmail(){


    if(!validateEmail && !validateName && !validateMessage && !validateSubject){

        submitError.innerHTML = 'Fill the form correctly';
        return false;

}

    submitError.innerHTML = "valid ✔";
    submitError.style.color ='green';
    return true;

}
   



    

    const form = document.getElementById('form');
    const result = document.getElementById('result');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."
    
   


      fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                  result.innerHTML = json.message;
              } else {
                  console.log(response);
                  result.innerHTML = json.message;
              }
          })
          .catch(error => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
          })
          .then(function() {
              form.reset();
              setTimeout(() => {
                  result.style.display = "none";
              }, 3000);
          });
  });
  