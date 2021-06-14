import tweet from "./tweets.module.scss"
import BlurOnIcon from '@material-ui/icons/BlurOn';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ImageIcon from '@material-ui/icons/Image';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GifIcon from '@material-ui/icons/Gif';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import {IconButton} from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import AllTweets from '../components/AllTweets'


const Tweets = () => {
	return (
		<div className={tweet.AllTweets}>
			<div className={tweet.HomeUpperDiv}>
				<div className={tweet.center}>
				   <h2>Home</h2>
				   <div className={tweet.logo}>
			               <BlurOnIcon/>
				    </div>
				</div>
			</div>
			 <div className={tweet.InputTweet}>
				      <div className={tweet.avatarAndInput}>
                                          <Avatar className={tweet.accountLogo}/> 
				       <textarea  placeholder="What's Happening?" className={tweet.tweetInput} />
				</div>

				<div className={tweet.TweetButtonAndOptions}>
					<div className={tweet.rightDiv}>
						<div className={tweet.IconsDiv}>	
							<ImageIcon />
							<GifIcon/>
						        <BarChartIcon/>
							<SentimentSatisfiedOutlinedIcon/>
                                                       <CalendarTodayIcon/>
						</div>
						<div className={tweet.TweetButton}>
							<button className={tweet.button}>Tweet</button>
						</div>
					</div>
				</div>
			</div>

			<div className={tweet.tweets}>
				<AllTweets/>
				<AllTweets/>
				<AllTweets/>
				<AllTweets/>
				<AllTweets/>
				<AllTweets/>
			</div>
		</div>
	)
}

export default Tweets
