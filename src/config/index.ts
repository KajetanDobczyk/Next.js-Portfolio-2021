const config = {
  env: process.env.NODE_ENV,
  apiUrl: process.env.API_URL,
  imagesPath: process.env.NODE_ENV === 'development' ? process.env.API_URL : '',
}

export default config
