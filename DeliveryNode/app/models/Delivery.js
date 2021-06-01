const Delivery = {
  save(data, callback) {
    let query = `insert into delivery (user, orderId, clientName, creditCard, 
      total, money, rest, publicplace, _number, neighborhood)
      values(${data.user}, ${data.orderId}, '${data.clientName}', '${data.creditCard}', 
      '${data.total}', '${data.money}', '${data.rest}', '${data.publicPlace}', 
      '${data._number}', '${data.neighborhood}');
      update _order set sendedToDelivery=1 where id=${data.orderId}`;
    const connect = require('./../../config/connect');
    connect.query(query, callback);
  },

  getDeliveryByOrder(orderId, callback) {
    let query = `select * from delivery where orderId = ${orderId}`;
    const connect = require('./../../config/connect');
    connect.query(query, callback);
  },

  cancel(deliveryId, orderId, callback) {
    let query = `
    delete from delivery where id = ${deliveryId};
    update _order set sendedToDelivery=0 where id = ${orderId};`;
    const connect = require('./../../config/connect');
    connect.query(query, callback);
  },

  getDeliveryByUserId(userId, callback) {
    let query = `select * from delivery where user = ${userId}`;
    const connect = require('./../../config/connect');
    connect.query(query, callback);
  }
};

module.exports = Delivery;