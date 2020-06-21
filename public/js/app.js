const nodemailer = require('nodemailer');
const app = express()

const port = 5000

const user = "joilson320@hotmail.com"
const pass = "asdfghj012345"

app.get('/Telacontato', (req, res) => res.send('Hello Word'))

app.post('/',(req,res) => {

    const transporter = nodemailer.createTransport({
        host:"smtp.live.com",
        port:587,
        auth: {user,pass}
    })
        
transporter.sendMail({
    
    from: user,
    to: user,
    replyTo: "joilsonssj@hotmail.com",
    seubject: "Olá, seja bem vindo",
    text: "Olá,muito obrigado por se cadastrar na nossa plataforma",
}).then(info => {
   res.send(info)
}).catch(error => {
    res.send(error)
})


    })





app.listem(port, () => console.log(`Running on port ${port}!`))



