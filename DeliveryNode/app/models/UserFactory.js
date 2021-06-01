function Admin() {
  this.getAllUsers = function(callback) {
    let query = 'select id, name, email from user where type=0';
    const connect = require('./../../config/connect');
    connect.query(query, callback);
  }
}

function User(data) {
  this.data = data;

  this.save = function(callback) {
    let query = `insert into user 
    (name, email, pwd, type, phone, street, _number, neighborhood, complement)
    values('${this.data.name}', '${this.data.email}', '${this.data.pwd}', 0, '${this.data.phone}',
     '${this.data.street}', '${this.data._number}', '${this.data.neighborhood}', 
     '${this.data.complement}')`;
    const connect = require('./../../config/connect');
    connect.query(query, callback);
  }

  this.verify = function(data, callback) {
    const connect = require('./../../config/connect')
    let query = `select * from user where email='${data.email}' and 
      pwd = '${data.pwd}'`;
    connect.query(query, callback);      
  };

  this.getUserInfos = function(id, callback) {
    const query = `select user.id, user.name, user.email, user.phone, user.pwd, 
    user.street, user._number, user.complement, neighborhood.name as neighborhood 
    from user, neighborhood  
    where user.id = ${id} and user.neighborhood = neighborhood.id`;
    const connect = require('./../../config/connect');
    connect.query(query, callback); 
  };

}

function Deliveryman(data) {
  this.data = data;

  this.save = function(callback) {
    let query = `insert into user 
    (name, cpf, email, pwd, type, phone)
    values('${this.data.name}', '${this.data.cpf}', '${this.data.email}', '${this.data.pwd}',
     2, '${this.data.phone}')`;
    const connect = require('./../../config/connect');
    connect.query(query, callback);
  },

  this.getAllDeliveryman = (callback) => {
    let query = 'select * from user where type = 2';
    const connect = require('./../../config/connect');
    connect.query(query, callback);
  },

  this.edit = (data, callback) => {
    let query = `update user set name='${data.name}', email='${data.email}', 
    pwd='${data.pwd}', cpf='${data.cpf}', phone='${data.phone}',  
    street='${data.street}', _number='${data._number}' 
    where id = ${data.id}`;
    const connect = require('./../../config/connect');
    connect.query(query, callback);
  },

  this.delete = (id, callback) => {
    let query = `delete from user where id = ${id}`;
    const connect = require('./../../config/connect');
    connect.query(query, callback);
  }
}


function UserFactory() {
  this.createUser = function(type, data=null) {
    var user;

    if(type === 0) {
      user = new User(data);
    } else if(type === 1) {
      user = new Admin();
    } else if(type === 2) {
      user = new Deliveryman(data);
    }

    user.getUser = function(id, callback) {
      const connect = require('./../../config/connect')
      let query = `select * from user
      where id = ${id}`
      connect.query(query, callback);
    }

    user.updateProfile = function(data, callback) {
      var userData = {
        id: data.id,
        name: typeof data.name != 'undefined' ? data.name : null,
        email: data.email,
        phone: typeof data.phone != 'undefined' ? data.phone : null,
        pwd: data.pwd,
        admin: data.admin,
        imageName: typeof data.imageName != 'undefined' ? data.imageName : null,
        imageLogo: typeof data.imageLogo != 'undefined' ? data.imageLogo : null,
        street: typeof data.street != 'undefined' ? data.street : null,
        _number: typeof data._number != 'undefined' ? data._number : null,
        neighborhood: typeof data.neighborhood != 'undefined' ? data.neighborhood : 0,
        complement: typeof data.complement != 'undefined' ? data.complement : null, 
      };
 
      const connect = require('./../../config/connect');
      var query;
      if(data.imageName) {
        query = `update user set name = '${userData.name}', email = '${userData.email}', 
        pwd = '${userData.pwd}', imageName = '${userData.imageName}', street = '${userData.street}', 
        _number = '${userData._number}', neighborhood = '${userData.neighborhood}', 
        complement = '${userData.complement}', phone='${userData.phone}' 
        where id = ${userData.id}`;
      } else {
        query = `update user set name = '${userData.name}', email = '${userData.email}', 
        pwd = '${userData.pwd}', street = '${userData.street}', _number = '${userData._number}', 
        neighborhood = '${userData.neighborhood}', complement = '${userData.complement}', 
        phone='${userData.phone}' where id = ${userData.id}`;
      }
      
      connect.query(query, callback);
      
    }

    user.getById = (id, callback) => {
      let query = 'select * from user where id = ' + id;
      const connect = require('./../../config/connect');
      connect.query(query, callback);
    }

    return user;
  }
}

module.exports = UserFactory;