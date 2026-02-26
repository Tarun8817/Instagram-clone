const express = require("express");
const postRouter = express.Router()
const postController = require('../controllers/post.controller')
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require('../middlewares/auth.middleware')

/**
 * @routes POST /api/posts [protected]
 * @description --req.body={caption.image-file}
*/

postRouter.post('/', upload.single("image"), identifyUser, postController.createPostController)



/**
 * @routes GET /api/posts/ [protected]
 * @description    get all the posts created by the user that the request come from..........
*/


postRouter.get("/", identifyUser, postController.getPostController)

/**
 * @routes Get/posts/details/postid
 * @description --return an detail about specific post with id. also check whether the post belongs to the user that the request come from
*/

postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)



/**
 * @route POST /api/posts/like/:postid
 * @description like a post with the id provided in the request params
*/


/**
 *  @route GET /api/posts/feed
 *  @description  get all the post created in the db
 *  @access private
*/

postRouter.get("/feed",identifyUser,postController.getFeedController)

postRouter.post(
  "/like/:postId",
  identifyUser,
  postController.likePostController
)


module.exports = postRouter

