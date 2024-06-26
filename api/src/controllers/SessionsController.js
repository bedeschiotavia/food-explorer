const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const knex = require("../database/knex");
const authConfig = require("../configs/auth");
const AppError = require("../utils/AppError");

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first();

    if (!user) {
      throw new AppError("Incorrect e-mail and/or password.", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Incorrect e-mail and/or password.", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ role:user.role }, secret, {
      subject: String(user.id),
      expiresIn
    });

    delete user.password

    response.status(201).json({ token, user });
  }
}

module.exports = SessionsController;