function sendEmail(fromEmail,name,cell,company,body) {
  var finalBody =  `Email: ${fromEmail} \n From: ${name} \n cell: ${cell} \n company: ${company} \n Body: ${body}`  ;
    Email.send({
        Host : "smtp.sendgrid.net",
        Username : "apikey",
        Password : "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",
        To : "horvatic.brandon@gmail.com",
        From : "horvatic.brandon@gmail.com",
        Subject : "Mail from contact us from on webstie.",
        Body : finalBody
    }).then(
      message => alert(message)
    );
  }

