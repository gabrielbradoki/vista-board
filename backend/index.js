const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config()

// Middleware para ler JSON
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: true,
  saveUninitialized: true
}))
app.use(express.urlencoded({extended: true,}));
app.use(cors());

// Open Route
app.get('/', (req, res) => {
  res.status(200).json({message: 'Bem vindo !!'})
});

// Private Route
app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id

  const user = await User.findById(id, '-password')

  if(!user) {
    return res.status(404).json({message: 'Usuário não encontrado!'})
  }

  res.status(200).json({ user })
})

function checkToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]

  if (!token)
  return res.status(401).json({message: 'Acesso não autorizado'})

  try {
    const secret = process.env.SECRET
    jwt.verify(token, secret)
    next()
  } catch (error) {
    return res.status(400).json({message: 'Token inválido'})
  }
}

app.use(express.json());

const cardRoutes = require('./routes/cardRoutes')
const User = require('./models/User')

app.use('/board', cardRoutes)

const DB_USER = process.env.DB_USER || ''
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD || '')

// Register User
app.post('/auth/register', async(req, res) => {
  const {name, email, password, confirmpassword} = req.body


  // Validations
  if (!name) {
    return res.status(422).json({message: 'Nome de usuário é obrigatório'})
  }

  if (!email) {
    return res.status(422).json({message: 'Email de usuário é obrigatório'})
  }

  if (!password) {
    return res.status(422).json({message: 'Senha de usuário é obrigatório'})
  }

  if (confirmpassword !== password) {
    return res.status(422).json({message: 'Confirmação de senha incorreta'})
  }

  // check if user exists
  const userExists = await User.findOne({email: email})

  if(userExists) {
    return res.status(422).json({message: 'Email já utilizado'})
  }

  // create password
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  // create user
  const user = new User({
    name,
    email,
    password: passwordHash
  })

  try {
    await user.save()
    res.status(201).json({message: 'Usuário criado com sucesso!'})
  } catch (error) {
    res.status(500).json({message: 'Aconteceu um erro de servidor, tente novamente mais tarde!'})
  }
})

// Login User
app.post("/auth/login", async(req, res) => {
  const {email, password} = req.body

  if (!email) {
    return res.status(422).json({message: 'Email de usuário é obrigatório'})
  }

  if (!password) {
    return res.status(422).json({message: 'Senha de usuário é obrigatório'})
  }

  // check if user exists
  const user = await User.findOne({email: email})

  if(!user) {
    return res.status(404).json({message: 'Usuário não encontrado!'})
  }

  // check if password exists

  const checkPassword = await bcrypt.compare(password, user.password)

  if(!checkPassword) {
    return res.status(404).json({message: 'Senha inválida'})
  }

  try {
    const secret = process.env.SECRET
    const token = jwt.sign(
      {
      id: user.id,
      },
      secret,
    )

    return res.status(200).json({message: 'Autenticação realizada com sucesso!!', token})

  } catch (error) {
    res.status(500).json({message: 'Aconteceu um erro de servidor, tente novamente mais tarde!'})
  }
})


// Watch Mongoose
mongoose
.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.efktubh.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log('Connect Successfully!!')
  app.listen(3000)
})
.catch((err) => console.error(err))
