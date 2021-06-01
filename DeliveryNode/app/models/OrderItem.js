const OrderItem = (function() {
  return {
    insertItems(orderId, items, callback) {
      var query = '';

      items.forEach(function(item) {
        query += `insert into order_item (_order, product, price, quantity, subTotal)
        values(${parseInt(orderId)}, ${parseInt(item.id)}, ${parseFloat(item.price)}, 
        ${parseInt(item.quantity)}, ${parseFloat(item.subTotal)}); `;
        if(item.stockControl == 1) {
          query += `update product set quantity = quantity - 1 where id = ${parseInt(item.id)}; `;
        }
      });
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    getByOrderId(orderId, callback) {
      let query = 
      `select order_item.id as oi_id, product.id as p_id, 
      product.name as name, product.barcode as barcode, 
      product.description as description, 
      order_item.price, order_item.quantity, order_item.subTotal 
      from _order, product, order_item
      where order_item.product = product.id
      and order_item._order = _order.id 
      and _order.id = ${orderId};`;
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },    
  }
})();

module.exports = OrderItem;