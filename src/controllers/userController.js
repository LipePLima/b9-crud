const { create, getUser, getAll, getById } = require("../services/userService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const yup = require("yup");

exports.create = async (req, res) => {
  try {
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
    });

    const data = await schema.validate(req.body);

    data.password = bcrypt.hashSync(req.body.password, 10);
    const user = await create(data);
    return res.status(200).send(user);
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.login = async (req, res) => {
  try {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
    });

    const data = await schema.validate(req.body);
    const user = await getUser(data.email);

    if(!user) throw { message: "Usuário não existe!" };

    if(user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          name: user.name
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );
      return res.status(200).send({ token })
    } {
      return res.status(401).send({ message: "Usuário ou senha incorretos!" })

    }
  } catch (e) {
    res.status(400).send(e)
  }
}

exports.get = async (req, res) => {
  try {
    const users = await getAll();
    return res.status(200).send(users);
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.getById = async (req, res) => {
  const idNumber = Number(req.params.id);
  try {
    const users = await getById(idNumber);
    return res.status(200).send(users);
  } catch (e) {
    return res.status(400).send(e);
  }
};
