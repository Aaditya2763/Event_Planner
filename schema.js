const Joi = require('joi');


module.exports.eventSchema = Joi.object({
    eventTitle: Joi.string().min(3).trim().required(),
    eventOrganiser: Joi.string().min(3).trim().required(),
    eventDescription: Joi.string().min(3).trim().required(),
    eventType: Joi.string().min(3).trim().required(),
  
});
