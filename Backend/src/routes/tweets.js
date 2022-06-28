const express = require('express');

const router = express.Router();

const TweetController = require('../controllers/tweets');

const CommentsController = require('../controllers/comments');

const { authMiddleware } = require('../middlewares/authMiddleware');

const { paginationMiddleware } = require('../middlewares/paginationMiddleware');

router.post('/', authMiddleware, TweetController.createTweet);

router.get('/', authMiddleware, paginationMiddleware, TweetController.getAllTweets);

router.get('/:id', TweetController.getTweetById);

router.delete('/:id', authMiddleware, TweetController.deleteTweet);

router.post('/:id/likes', authMiddleware, TweetController.likeTweet);

router.post('/:id/comments', authMiddleware, CommentsController.createComment);

router.get('/feed/:username', paginationMiddleware, TweetController.getFeedUsername);

module.exports = router;
