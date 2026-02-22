const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({
    origin: ["http://localhost:4200"],
    methods: ["POST"]
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "contact.angular.trainer@gmail.com",
        pass: "cixmsepcwsxwkvxo"
    }
});

app.get("/", (req, res) => {
    res.send("Hello Friends");
});

app.post("/send-email", async (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: "contact.angular.trainer@gmail.com",
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, success) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).send({
                message: "Failed to send email", error: error.message
            });
        } else {
            console.log("Email sent: ", success.response);
            return res.status(200).send({
                message: "Email sent successfully", response: success.response
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});