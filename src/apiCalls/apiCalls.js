import axios from 'axios';
import md5 from 'js-md5';

var url = 'https://gateway.marvel.com/v1/public';
var publicKey = '56a27295e47666a3d71edb04d0159d74';
var privateKey = '53d31693bf1ee219d421806ac23bbc9aadf22901';
var ts = Number(new Date());
var hash = md5.create();
hash.update(ts + privateKey + publicKey);

export const getCharacters = (limit, searchQuery) => {
  return axios.get(`${url}/characters`, {
    params: {
        apikey: publicKey,
        ts: ts,
        hash: hash.hex(),
        limit: limit,
        nameStartsWith: searchQuery
    }
  })
}

export const getCharacter = (characterId) => {
  return axios.get(`${url}/characters/${characterId}`, {
    params: {
        apikey: publicKey,
        ts: ts,
        hash: hash.hex()
    }
  })
}

export const getComics = (characterId, limit) => {
  return axios.get(`${url}/characters/${characterId}/comics`, {
    params: {
        apikey: publicKey,
        ts: ts,
        hash: hash.hex(),
        limit: limit
    }
  })
}

export const getStories = (characterId, limit) => {
  return axios.get(`${url}/characters/${characterId}/stories`, {
    params: {
        apikey: publicKey,
        ts: ts,
        hash: hash.hex(),
        limit: limit
    }
  })
}

export const getSeries = (characterId, limit) => {
  return axios.get(`${url}/characters/${characterId}/series`, {
    params: {
        apikey: publicKey,
        ts: ts,
        hash: hash.hex(),
        limit: limit
    }
  })
}

export const getEvents = (characterId, limit) => {
  return axios.get(`${url}/characters/${characterId}/events`, {
    params: {
        apikey: publicKey,
        ts: ts,
        hash: hash.hex(),
        limit: limit
    }
  })
}
