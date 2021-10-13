const router = require('express').Router();

const { createUser, getUsersData, getUsersDataById } = require('./user.controller');

const baseRouterPath = '/user';
router.post(`${baseRouterPath}`, createUser);
router.get(`${baseRouterPath}`, getUsersData);
router.get(`${baseRouterPath}/:id`, getUsersDataById);


module.exports = router;