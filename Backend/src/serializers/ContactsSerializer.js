const BaseSerializer = require('./BaseSerializer');

class ContactsSerializer extends BaseSerializer {
  constructor(models, paginationInfo) {
    const serializedModels = models.map((model) => {
      
      const serializedModel = model.toJSON();
      delete serializedModel?.user?.password;
      delete serializedModel?.user?.active;
      delete serializedModel?.user?.id;
      delete serializedModel?.userId;

      return serializedModel;
    });
    super('success', serializedModels, paginationInfo);
  }
}
module.exports = ContactsSerializer;
