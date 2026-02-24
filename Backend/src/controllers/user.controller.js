const followModel = require("../model/follow.model");
const userModel = require("../model/user.model");


async function followUserController(req,res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if(followerUsername==followeeUsername){
        return res.status(400).json({
            message:"Your cannot follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username:followeeUsername
    })

    if(!isFolloweeExists){
        return res.status(404).json({
            message:"User you are trying to follow does not exists"
        })
    }

    const isAlredyFollowing = await followModel.findOne({
        followe:followerUsername,
        followee:followerUsername
    })

    if(isAlredyFollowing){
        return res.status(200).json({
            message:`You are already following ${followeeUsername}`,
            follow:isAlredyFollowing
        })
    }



    const followRecord = await followModel.create({
        follower:followeeUsername,
        followee:followeeUsername
    })

    res.status(201).json({
        message:`Your are now following ${followeeUsername}`,
        follow:followRecord
    })
}


async function unfollowUserController(req,res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username


    const isUserFollowing = await followModel.findOne({
        follower :followerUsername,
        followee:followeeUsername
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message:`You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message:`You have unfollowed ${followeeUsername}`
    }
    )
}

module.exports = {
    followUserController,
    unfollowUserController,
}