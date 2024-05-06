const { create, login, get, getById } = require("../controllers/userController");

exports.routes = (app) => {
  app.post("/v1/user", create);
  app.post("/v1/login", login);
  app.get("/v1/user", get);
  app.get("/v1/user/:id", getById);
};
