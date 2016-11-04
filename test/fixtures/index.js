'use strict'

const uuid = require('uuid-base62')

const fixtures = {
  getImage () {
    return {
      description: 'an #awesome picture with #tags #platzi',
      url: `http://platzigram.test/${uuid.v4()}.jpg`,
      likes: 0,
      liked: false,
      userId: uuid.uuid()
    }
  },
  getImages (n) {
    let images = []
    while (n-- > 0) {
      images.push(this.getImage())
    }
    return images
  },
  getUser () {
    return {
      name: 'A random user',
      username: `user_${uuid.uuid()}`,
      password: uuid.uuid(),
      email: `${uuid.v4()}@domain.test`
    }
  }
}

module.exports = fixtures
