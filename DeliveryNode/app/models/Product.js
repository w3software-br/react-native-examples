const Product = (function() {
  return {
    save(data, callback) {

      let price = parseFloat(data.price.replace(',', '.'))
      let query = `insert into product
        (name, barcode, description, price, quantity, stock_control, imageName, category)
        values('${data.name}', '${data.barcode}',
        '${data.description}', ${price}, ${data.quantity}, ${data.stockControl},
        '${data.imageName}', ${data.category})`

      const connect = require('./../../config/connect')
      connect.query(query, callback)

    },

    getAll(categoryId, callback) {
      const connect = require('./../../config/connect')
      let query = 'select * from product';
      if(categoryId) {query += ` where category = ${categoryId}`}
      connect.query(query, callback)
    },

    getPage(page, pagination, categoryId, callback) {
      const size = pagination.size;
      const init = (page - 1) * size; 
      
      const connect = require('./../../config/connect');
      let query = `select * from product limit ${init}, ${size}`;
      if(categoryId) query = 
        `select * from product where category = ${categoryId} limit ${init}, ${size}`;
      connect.query(query, callback)
    },

    getById(id, callback) {
      const connect = require('./../../config/connect')
      let query = `select * from product where id = ${id}`;
      connect.query(query, callback)
    },

    update(data, callback) {
      var quantity = null;
      
      data.units !== ''
      ? quantity = parseInt(data.quantity) + parseInt(data.units)
      : quantity = parseInt(data.quantity);      
         
      let query=null;
      if(data.imageName) {
        query = `update product set name='${data.name}', barcode='${data.barcode}',
        description='${data.description}', price=${data.price}, quantity=${quantity}, 
        stock_control=${data.stockControl}, imageName='${data.imageName}', 
        category=${data.category}, activated=${data.state} where id = ${data.id} ; `
      } else {
        query = `update product set name='${data.name}', barcode='${data.barcode}',
        description='${data.description}', price=${data.price}, quantity=${quantity}, 
        stock_control=${data.stockControl}, category=${data.category} where id = ${data.id}`
      }
      
      const connect = require('./../../config/connect');
      connect.query(query, callback);

    },

    deactivate(id, callback) {
      let query = `update product set activated = 0 where id = ${id}`
      const connect = require('./../../config/connect')
      connect.query(query, callback);
    },

    activate(id, callback) {
      let query = `update product set activated = 1 where id = ${id}`
      const connect = require('./../../config/connect')
      connect.query(query, callback);
    },

    getTotalOfProducts(categoryId, callback) {
      let query = 'select count(*) as totalOfProducts from product';
      if(categoryId) query += ` where category = ${categoryId}`;
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    getProductsCart(data) {
      var keys = Object.keys(data);
      var ids = [];
      keys.forEach(el => {
        if(el.startsWith('id')) {
          ids.push(el.split('_')[1]);
        }
      });

      var products = [];
      var total = 0;
      ids.forEach(id => {
        var product = {};
        product['id'] = data['id_' + id]; 
        product['name'] = data['name_' + id]; 
        product['price'] = data['price_' + id];
        product['stock'] = data['stock_' + id];
        product['quantity'] = data['quantity_' + id];
        product['subTotal'] = data['subTotal_' + id];
        product['stockControl'] = data['stockControl_' + id];
        products.push(product);
        total += parseFloat(product['subTotal']);
      });
      products['total'] = total;
      return products;
    },

    searchProduct(productName, callback) {
      let query = `select * from product where name like '%${productName}%'`;
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    getLowStoque(callback) {
      let query = `select * from product where stock_control=1 and quantity<10`;
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    }
    
  }
})()

module.exports = Product
