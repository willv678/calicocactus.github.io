const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',
  basePath: isProd ? '/calicocactus.github.io' : '',
  images: {
    unoptimized: true,
  },
}