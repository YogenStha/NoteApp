const authRouter = require('./auth/auth.route');
const notesRouter = require('./notes/notes.route')

const mainRouter = (app) => {
    app.use('/api/v1',[notesRouter,authRouter])
}

module.exports = mainRouter