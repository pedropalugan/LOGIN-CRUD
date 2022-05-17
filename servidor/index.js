const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
let x;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "banco"
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length === 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuarios (email, password) VALUE (?,?)",
          [email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Cadastrado!" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});


app.post("/atualizar", (req, res) => {
  const email = req.body.email
  const password = req.body.password;
  console.log(email)
  console.log(password)
  
  db.query(`SELECT * FROM usuarios WHERE email = '${email}'`, (err, result) => {
    if (err) {
      res.send(err);

    }
    console.log(result.length)
      if (result.length > 0) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(`update usuarios set password = '${hash}' where email = '${email}'`, (error, response) => {
        if (error) {
          res.send(error);
        }
        else if (response) {
          res.send({ msg: "Senha atualizada" })
         
        } else {
          res.send({ msg: "Tente novamente" });
        }
      })
    });
    }
    else if(result.length <= 0) {
      res.send({ msg: "Usuário não registrado!" });
      x = 0;
    }
  });
}); 




app.post("/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password;
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: 1});
         
        } else {
          res.send({ msg: 0 });
        }
      });
    } else {
      res.send({ msg: 0 });
    }
  });
}); 




app.listen(3001, () => {
  console.log("rodando na porta 3001");
});

