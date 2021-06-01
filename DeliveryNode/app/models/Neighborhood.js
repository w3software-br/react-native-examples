const connect = require('./../../config/connect')

const Neighborood = (function() {
  return {

    save(name, callback) {
      let query = `insert into neighborhood(name) values('${name}')`
      console.log(query)
      const connect = require('./../../config/connect')
      connect.query(query, callback)
    },

    showAll(callback) {
      let query = 'select * from neighborhood'
      const connect = require('./../../config/connect.js')
      connect.query(query, callback)
    },

    getById(id, callback) {
      let query = `select * from neighborhood where id = ${id}`
      const connect = require('./../../config/connect.js')
      connect.query(query, callback)
    },

    edit(data, callback) {
      let query = `update neighborhood set name = '${data.name}'
      where id = ${data.id}`
      const connect = require('./../../config/connect.js')
      connect.query(query, callback)
    },

    deactivate(id, callback) {
      let query = `update neighborhood set activated = 0 where id = ${id}`
      const connect = require('./../../config/connect.js')
      connect.query(query, callback)
    },

    activate(id, callback) {
      let query = `update neighborhood set activated = 1 where id = ${id}`
      const connect = require('./../../config/connect.js')
      connect.query(query, callback)
    },

    getActives(callback) {
      let query = `select * from neighborhood where activated = 1`;
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    },

    getUserNeighborhood(idNeighborhood, callback) {
      let query = `select name from neighborhood where id = ${idNeighborhood}`;
      const connect = require('./../../config/connect');
      console.log(query);
      connect.query(query, callback);
    }

  }
})()

module.exports = Neighborood
