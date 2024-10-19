const inventoryService = require("../serviceLogic/inventoryService")

const getProductAvailability = async (body) => inventoryService.getProductAvailability(body)
const reduceProductQuantity = async (params) => inventoryService.reduceProductQuantity(params)
const increaseProductQuantity = async (params) => inventoryService.increaseProductQuantity(params)

module.exports = {
    getProductAvailability,
    reduceProductQuantity,
    increaseProductQuantity
  };