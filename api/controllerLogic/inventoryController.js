const inventoryBusiness = require('../businessLogic/inventoryBusiness');

const getProductAvailability = (req, res) => {
  inventoryBusiness.getProductAvailability(req.body).then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

const reduceProductQuantity = (req, res) => {
  inventoryBusiness.reduceProductQuantity(req.params).then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

const increaseProductQuantity = (req, res) => {
  inventoryBusiness.increaseProductQuantity(req.params).then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

module.exports = {
  getProductAvailability,
  reduceProductQuantity,
  increaseProductQuantity
};