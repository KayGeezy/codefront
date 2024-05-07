
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      company: document.getElementById("company").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };
  
    const serviceID = "service_c0471ro";
    const templateID = "template_kjvtpnd";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("message").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
