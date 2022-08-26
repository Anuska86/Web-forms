import express from "express";
import path from "path";
import sgMail from "@sendgrid/mail";
import dotenv from 'dotenv'

dotenv.config()

const app = express();
sgMail.setApiKey(process.env.SGKEY);

app.use(express.json());
app.use(express.static("app"));
app.get("/", (req, res) => {
  res.sendFile(`${path.resolve()}/index.html`);
/*
  const msg = {
    to: "anuska@mailinator.com", // Change to your recipient
    from: "anasrm86@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    }); */
});
app.post('/send',(req,res)=> {
    console.log (req.body)
    res.status(401).send('The email is wrong')
})

app.listen(3000, () => console.log("The app is running"));