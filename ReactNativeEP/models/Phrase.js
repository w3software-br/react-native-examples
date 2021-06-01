const Phrase = {

  getLocal() {
    // hostname -I
    // webdelivery.app.br:81
    return 'http://192.168.0.4:8000';
  },

  getRemote() {
    return 'https://webdelivery.app.br:81';
  },

  insert(phrase) {    
    const axios = require('axios');
    axios.post(this.getRemote() + '/new-phrase', {
      _text: phrase,
      user: 1
    })
    .then(function(response) {
      if(response.data.ok) {
        alert('Frase inserida com sucesso!');
      } else {
        alert('Oops! Houve um problema :(');
      }
    })
    .catch(function(error) {
      console.error(error);
    });

  },

  getAllPhrases() {
    const axios = require('axios');
    axios.get(this.getRemote() + '/get-all-phrases?userId=1')
    .then(response => {
      Object.values(response.data.phrases).forEach(phrase => {
        console.log(phrase._text);
      });
    })
    .catch(error => {
      console.error(error);
    });
  },

  givemeAPhrase() {   
    const axios = require('axios');
    return axios.get(this.getRemote() + '/giveme-a-phrase?userId=1');
  },

  setUsed(phraseId) {
    console.log(this.getRemote() + '/set-used?phraseId='+phraseId);
    const axios = require('axios');
    return axios.get(this.getRemote() + '/set-used?phraseId='+phraseId);
  },

  initialize() {
    const axios = require('axios');
    let sql = "update Phrase set used=0";
    return axios.get(this.getRemote() + '/initialize');    
  }

}

module.exports = Phrase;