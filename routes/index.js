const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./projectRoutes.js'))
router.use('/api', require('./issueRoutes.js'))
router.use('/api', require('./replyRoutes.js'))

module.exports = router
