function sendEmail() { 
    const form = document.getElementById('email-form')
    const formData = new FormData(form)

    console.log(form)
    console.log(formData)

    // email, password, receiver, subject, body

    // Email.send({ 
    //     Host: "smtp.gmail.com", 
    //     Username: email, 
    //     Password: password, 
    //     To: receiver, 
    //     From: email, 
    //     Subject: subject, 
    //     Body: body, 
    // }).then(res => {
    //     alert("Mail sent successfully")
    // }).catch(err => { console.error(err) })
} 