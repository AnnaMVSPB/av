const router = require('express').Router();

const adsRoute = require('./ads.routes');
const apiUsersRoute = require('./users.routes');
const apiAuthRoute = require('./auth.routes');

router.use('/api/ads', adsRoute);
router.use('/api/users', apiUsersRoute);
router.use('/api/auth', apiAuthRoute);

module.exports = router;
