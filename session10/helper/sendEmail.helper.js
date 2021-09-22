const nodemailer=require('nodemailer')
const { getMaxListeners } = require('process')


const smtpConfig={
    service:'gmail',
    auth:{
        user:"reemasad99@gmail.com",
        pass:'1234@test'
    }
}

const sendEmailMe=(reciverEmail, textEmail)=>{
    try{
        const transporter=nodemailer.createTransport(smtpConfig)
        let mailOptions={
            from:"our app",
            to:"reciverEmail",
            subject:"our subject",
            text:textEmail
        }
        transporter.sendMail(mailOptions)
    }
    catch(e){
        console.log(e)
    }
}
module.exports=sendEmailMe