const BaseSerializer = require('./BaseSerializer');

class ContactSerializer extends BaseSerializer {
  constructor(model) {
    const serializedModel = model ? model.toJSON() : null;

    delete serializedModel?.password;
    delete serializedModel?.user?.password;
    delete serializedModel?.user?.active;
    delete serializedModel?.user?.id;
    delete serializedModel?.userId;

    super('success', serializedModel);
  }
}

module.exports = ContactSerializer;
