jest.createMockFromModule('axios');

const get = jest.fn().mockName('mockedGet');
const post = jest.fn().mockName('mockedGet');

const create = jest.fn((defaults) => ({
  defaults,
  get,
  post,
}));

const axios = {
  create,
  get,
  post,
};

module.exports = axios;
