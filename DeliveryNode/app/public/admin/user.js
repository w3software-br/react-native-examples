var Helper = (function() {
  return {
    seePwd(event) {
      event.preventDefault();
      var pwdInput = document.getElementById('pwd');
      var buttonSeePwd = document.getElementById('buttonSeePwd');
      if(pwdInput.type === 'password') {
        pwdInput.type = 'text';
        buttonSeePwd.innerText = "Ocultar Senha";
      } else {
        pwdInput.type = 'password';
        buttonSeePwd.innerText = "Exibir Senha";
      }
    },

    fixPhone(phone) {
      phone = phone.replace('(', '').replace(')','');
      if(phone.length == 2) {
        document.getElementById('phone').value = '(' + phone + ')';
      }
    },

    cleanCache() {
      if('serviceWorker' in navigator) {
        caches.keys().then(cacheNames => {
          cacheNames.forEach(cacheName => {
            caches.delete(cacheName);
          })
        })
        .catch(error => {
          console.error(error);
        });
      }
    }

  }  
})();

function fixPhone(phone) {  
  phone = phone.replace('(', '').replace(')','');
  if(phone.length == 2) {
    document.getElementById('phone').value = '(' + phone + ')';
  }
}

function simpleGetAjax(url) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      variableContent.innerHTML = xhr.response;
    } else {
      variableContent.innerHTML = "<h3>Carregando...</h3>"
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

function simplePostAjax(url=null, form=null) {
  var xhr = new XMLHttpRequest();
  var formData = new FormData(form)

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      variableContent.innerHTML = xhr.response;
    } else {
      variableContent.innerHTML = "<h3>Carregando...</h3>"
    }
  }

  xhr.open("POST", form.getAttribute('action'), true);
  xhr.send(formData);
}

var User = (function() {
  return {

    profile: function() {
      // show the formulary
      var variableContent = document.getElementById('variableContent');
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          variableContent.innerHTML = this.response;
        } else {
          variableContent.innerHTML = "<h3 class='text-canter'>carregando...</h3>";
        }
      }
      xhr.open('GET', '/user-profile', true);
      xhr.send();
    },

    updateProfile: function(event) {
      // Helper.cleanCache();
      event.preventDefault();
      var email = document.getElementById('email').value;
      var pwd = document.getElementById('pwd').value;
      if(email == '' || pwd == '') {
        alert('Email e senha são obrigatórios');
      } else {
        var variableContent = document.getElementById('variableContent');
        var profileForm = document.getElementById('profileForm');
        var formData = new FormData(profileForm)
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200) {
            variableContent.innerHTML = this.response;
          } else {
            variableContent.innerHTML = "<h3 class='text-canter'>carregando...</h3>"
          }
        }
        xhr.open('POST', profileForm.getAttribute('action'), true);
        xhr.send(formData);
      }
      
    },    

  }
})();

var Order = (function() {

  return {

    orderDetails(orderId) {
      var url = '/my-order-details?id=' + orderId;
      simpleGetAjax(url); 
    },

    sendWhatsAppMessage() {
      var phone = document.getElementById('phone');
      var message = document.getElementById('message');
      var orderId = document.getElementById('orderId');
            
      var form = document.createElement('FORM');
      form.appendChild(phone); 
      form.appendChild(message);
      form.appendChild(orderId);

      form.method = 'post';
      form.action = '/send-user-whatsapp-message';
      document.body.appendChild(form);
      
      form.submit();
    }

  }
  
 })();

