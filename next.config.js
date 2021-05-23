const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  const apiUrls = {
    [PHASE_DEVELOPMENT_SERVER]: 'http://localhost:1337',
    [PHASE_PRODUCTION_BUILD]: 'https://kajetan-dobczyk-cms.herokuapp.com',
  }

  return {
    env: {
      API_URL: apiUrls[phase],
    },
    images: {
      domains: ['assets.vercel.com', 'localhost', 'herokuapp.com'],
    },
  }
}
