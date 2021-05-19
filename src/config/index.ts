const config = {
  blogUrl: `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }`,
}

export default config
