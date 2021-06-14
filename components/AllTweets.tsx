import tweets from './alltweets.module.scss'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import { Avatar } from '@material-ui/core';


const AllTweets = () => {
	return (
		<div className={tweets.TweetPost}>
			<div className={tweets.PostHeader}>
				<div className={tweets.userAvatar}>
					<Avatar/>
				</div>
				<div className={tweets.tweetData}>
					<div className={tweets.tweetSender}>
						<h3>Hartaj Singh Sidhu </h3> &nbsp; &nbsp; <span> @thehartajsingh</span>
					</div>
					<div className={tweets.tweetContent}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a iste aspernatur consequatur eligendi aliquid cumque error tempora, beatae ipsum sapiente veritatis asperiores deserunt illo reiciendis, sint modi amet laboriosam!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repudiandae beatae, tempore officiis animi tenetur dolorem soluta quod nesciunt quia aliquam assumenda sint architecto nisi, qui modi sed magnam mollitia.
					</div>

				</div>
			</div>
			<div className={tweets.postFooter}>
				<div className={tweets.footIcons}>
					<ChatBubbleOutlineOutlinedIcon fontSize="small"/>
					<RepeatOutlinedIcon fontSize="small"/>
					<FavoriteBorderOutlinedIcon fontSize="small"/>
					<ShareOutlinedIcon fontSize="small"/>
				</div>
			</div>
		</div>
	)
}

export default AllTweets
