const ApiError = require("../utils/ApiError");
const { User, Contact } = require("../database/models");
const ContactSerializer = require("../serializers/ContactSerializer");
const ContactsSerializer = require("../serializers/ContactsSerializer");

const findContact = async (body) => {
  const contact = await Contact.findOne({
    where: body,
    include: [{ model: User, as: "user" }],
  });
  if (!contact) {
    throw new ApiError("Contact not found", 404);
  }
  return contact;
};

const createContact = async (req, res, next) => {
  try {
    const { body } = req;

    if (
      body.nombre === null ||
      body.telefono === undefined ||
      req.user.id === undefined
    ) {
      throw new ApiError("Bad request", 400);
    }

    const contactFinder = await Contact.findOne({where: { nombre: body.nombre } ,include: [{ model: User, as: "user" }],})

    if(contactFinder){
      throw new ApiError("Contact already exists", 400);
    }

    const contact = await Contact.create({
      nombre: body.nombre,
      userId: req.user.id,
      telefono: body.telefono,
      descripcion: body.descripcion,
    });

    res.json(new ContactSerializer(contact));
  } catch (err) {
    next(err);
  }
  
};

const getAllContact = async (req, res, next) => {
  try {

    const ContactList = await Contact.findAll({
      where: { userId: req.user.id },
      ...req.pagination,
      include: [{ model: User, as: "user" }],
    });
    res.json(
      new ContactsSerializer(ContactList, await req.getPaginationInfo(Contact))
    );
  } catch (err) {
    next(err);
  }
};

const getContactByName = async (req, res, next) => {
  try {
    const { params } = req;
    const contact = await findContact({ nombre: params.name });

    res.json(new ContactSerializer(contact));
  } catch (err) {
    next(err);
  }
};

const deleteContact = async (req, res, next) => {

  try {
    const { params } = req;

    const userId = Number(req.user.id);
    req.isUserAuthorized(userId);

    const contact = await findContact({ nombre: params.name, userId: userId });

    if (contact) {

      await Contact.destroy({ where: { nombre: params.name, userId: userId } });
      res.json(new ContactSerializer(null));

    } else {
      throw new ApiError("Contact not found", 404);
    }
  } catch (err) {
    next(err);
  }

};

const updateContact = async (req, res, next) => {
  try {
    const { body } = req;
    const { params } = req;

    const userId = Number(req.user.id);
    req.isUserAuthorized(userId);

    const contact = await findContact({ nombre: params.name, userId: userId });

    if (!contact || contact === false) {
      throw new ApiError("Contact not found", 404);
    }

    if (contact.userId !== userId) {
      throw new ApiError("Contact not authorized", 401);
    }

    const contactPayload = {
      nombre: body.nombre,
      telefono: body.telefono,
      descripcion: body.descripcion,
    };

    if (Object.values(contactPayload).some((val) => val === undefined)) {
      throw new ApiError('Payload can only contain nombre, telefono, descripcion', 400);
    }

    Object.assign(contact, contactPayload);

    await contact.save();

    res.json(new ContactSerializer(contact));
  } catch (err) {
    next(err);
  }
};



module.exports = {
  findContact,
  createContact,
  getContactByName,
  deleteContact,
  getAllContact,
  updateContact
};
