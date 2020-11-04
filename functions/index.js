const { response } = require('express');
var functions = require('firebase-functions');
const { send } = require('process');

const sendgrid = require('sendgrid'); 
const client = sendgrid("APIKEY"); 

function parseBody(body) {

    var helper = sendgrid.mail; 
    var fromEmail = new helper.Email(body.from);
    var toEmail = new helper.Email(body.to);
    var subject = body.subject; 
    var content = new helper.Content('text/html' , body.content);
    var mail = new helper.Mail(fromEmail,subject,toEmail, content);
    return mail.toJSON();
}

exports.HttpEmail = functions.https.onRequest((req,res) => 
{
    return Promise.resolve()
    .then(() => {
        if(req.method !== 'POST'){
            const error = new Error('Only POST Request are accepted '); 
            error.code = 405;
            throw error; 
        }

        const request = client.emptyRequest({
            method : 'POST',
            path : '/v3/mail/send',
            body : parseBody(req.body),
        });
    })
    .then((response)=> 
    {
        if(response.body){
            res.send(response.body);
        }else{
            res.end();
        }

    })
    .catch((err)=>{
        console.log(err);
        return Promise.reject(err);
    })

});
