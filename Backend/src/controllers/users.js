const ApiError = require("../utils/ApiError");
const { User } = require("../database/models");
const UserSerializer = require("../serializers/UserSerializer");
const AuthSerializer = require("../serializers/AuthSerializer");
const {
  generateAccessToken,
  toBlacklist,
} = require("../services/jwt");

const UsersSerializer = require("../serializers/UsersSerializer");

const findUser = async (body) => {
  Object.assign(body, { active: true });

  const user = await User.findOne({ where: body });
  if (!user) {
    throw new ApiError("User not found", 404);
  }

  return user;
};

const createUser = async (req, res, next) => {
  try {
    const { body } = req;

    if (body.password !== body.passwordConfirmation) {
      throw new ApiError("Passwords do not match", 400);
    }

    if (body.username === undefined || body.password === undefined) {
      throw new ApiError(
        "Payload must contain name, username, email and password" + body.name,
        400
      );
    }

    const user = await User.create({
      username: body.username,
      password: body.password,
    });
    res.json(new UserSerializer(user));
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ ...req.pagination });
    res.json(new UsersSerializer(users, await req.getPaginationInfo(User)));
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { params } = req;
    const user = await User.findOne({ where: { id: params.id } });
    if (!user || user.active === false) {
      throw new ApiError("User not found", 404);
    }
    res.json(new UserSerializer(user));
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { params, body } = req;

    const userId = Number(params.id);
    req.isUserAuthorized(userId);

    const user = await findUser({ id: userId });

    const userPayload = {
      username: body.username,
    };

    if (Object.values(userPayload).some((val) => val === undefined)) {
      throw new ApiError('Payload can only contain username', 400);
    }

    Object.assign(user, userPayload);

    await user.save();

    res.json(new UserSerializer(user));
  } catch (err) {
    next(err);
  }
};

const deactivateUser = async (req, res, next) => {
  try {
    const { params } = req;

    req.isUserAuthorized(Number(params.id));
    const user = await findUser(Number(params.id));
    if (!user || user.active === false) {
      throw new ApiError("User not found", 404);
    }
    Object.assign(user, { active: false });

    await user.save();

    res.json(new UserSerializer(null));
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { body } = req;
    if (body.username === undefined || body.password === undefined) {
      throw new ApiError("Payload must contain username and password", 400);
    }
    const user = await findUser({ username: body.username });
    if (!(await user.comparePassword(body.password))) {
      throw new ApiError("User not found", 404);
    }

    const userId = Number(user.id);
    const accessToken = generateAccessToken(userId);
    user.token = accessToken;
    await user.save();

    res.json(new AuthSerializer(accessToken));
  } catch (err) {
    next(err);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    
    const accessToken = req.headers.authorization?.split(" ")[1];
    toBlacklist(accessToken);

    res.json(new UserSerializer(null));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  findUser,
  deactivateUser,
  loginUser,
  logoutUser,
};
