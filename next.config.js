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
      deviceSizes: [380, 576, 768, 992, 1200, 1440],
      imageSizes: [16, 32, 48, 64, 96],
      path: '/_next/image',
      loader: 'default',
      domains: ['assets.vercel.com', 'localhost', 'herokuapp.com'],
    },
  }
}
