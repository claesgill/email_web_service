function sendEmail() { 
    const email    = document.getElementById('email')
    const password = document.getElementById('password')
    // const host     = document.getElementById('host')

    const receiver = "claes@claesgill.com"
    const subject  = "Test"
    const body     = "Test message"

    Email.send({ 
        Host: "smtp.gmail.com", 
        Username: email, 
        Password: password, 
        To: receiver, 
        From: email, 
        Subject: subject, 
        Body: body, 
    }).then(res => {
        alert("Mail sent successfully")
    }).catch(err => { console.error(err) })
}