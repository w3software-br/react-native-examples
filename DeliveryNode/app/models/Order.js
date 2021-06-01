const connect = require('./../../config/connect');

const Order = (function() {
  return {
    calculateTotal(items) {
      var total = 0;
      items.forEach(item => {
        total += parseFloat(item.subTotal);
      });
      return total;
    },

    createOrder(order, callback) {      
      var query = `
        insert into _order (user, total, money, creditcard, street, _number, neighborhood)
        values(${parseInt(order.user)}, ${parseFloat(order.total)}, 
        ${parseFloat(order.money)}, '${order.creditCard}', '${order.address.street}', 
        '${order.address._number}', 
        ${parseInt(order.address.neighborhood)})`;
      
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    getAllOrders(callback) {
      let query = 'select * from _order order by id';
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    getFulfilledOrdersOrders(callback) {
      let query = 'select * from _order where status = 1';
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    getNoFulfilledOrders(callback) {
      let query = 'select * from _order where status = 0';
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    getById(id, callback) {
      let query = `select * from _order where id = ${id}`;
      const connect = require('../../config/connect');
      connect.query(query, callback); 
    },

    getOrerInfo(id, callback) {
      let query = `select _order.id, _order._datetime, _order.user, _order.total, 
      _order.money, _order.creditcard, _order.status, _order.street, _order._number, 
      neighborhood.name as neighborhood, _order.sendedToDelivery 
      from _order, neighborhood where _order.id = ${id} 
      and _order.neighborhood = neighborhood.id`;
      const connect = require('../../config/connect');
      connect.query(query, callback); 
    },

    markAsFuldilled(id, callback) {
      var query = `update _order set status = 1 where id = ${id};
      delete from delivery where orderId=${id};`;
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    myOrders(userId, callback) {
      var query = `select * from _order where user = ${userId}`;
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    getMyFulfilledOrdersOrders(userId, callback) {
      var query = `select * from _order where user = ${userId} 
      and status = 1`;
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    getMyNoFulFilledOrders(userId, callback) {
      var query = `select * from _order where user = ${userId} 
      and status = 0`;
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    isItFulFilled(status) {
      if(status == 0) return 'no-fulfilled';
      else return 'fulfilled'; 
    }

  }
})();

module.exports = Order;