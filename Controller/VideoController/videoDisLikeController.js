import Video from "../../Models/video.js";
export const videoDisLikeController = async (req, res) => {

    const videoId = req.params.id;
    const userId = req.user.payload?._id


    try {
        const video = await Video.findOne({ _id: videoId })

        if (!video.dislikes.includes(userId)) {
            if (video.likes.includes(userId)) {

                await video.updateOne({ $pull: { likes: userId } })
            }
            await video.updateOne({ $push: { dislikes: userId } })

            res.json({ status: true, message: " video dislike succesfully" })
        }
        else {
            await video.updateOne({ $pull: { dislikes: userId } })
            res.json({ status: true, message: " video undislike succesfully" })

        }

    } catch (error) {
        res.send(error)

    }


}