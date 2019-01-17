const { parse } = require('url')
const match = require('micro-route/match')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const routes = {
  home: req => match(req, '/'),
  projects: req => match(req, '/projects'),
}

async function main (req, res) {
  const parsedUrl = parse(req.url, true)
  const { query } = parsedUrl

  if (routes.home(req)) {
    return app.render(req, res, '/', query)
  } else if (routes.projects(req)) {
    return app.render(req, res, '/projects', query)
  }

  return handle(req, res, parsedUrl)
}

async function setup (handler) {
  await app.prepare()
  return handler
}

module.exports = setup(main)