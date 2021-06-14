import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExploreIcon from "@material-ui/icons/Explore";
import style from "./sidebar.module.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import {IconButton} from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import Link from "next/link"

const Sidebar = () => {
  return (
    <div className={style.fullSidebar}>
      <div className={style.sidebarData}>
       <div className={style.flexStartData}>
        <div className={style.twitterLogo}>
		{/* <IconButton> */}
                   <TwitterIcon  fontSize="large"/>
	      {/* </IconButton> */}
        </div>
        <div className={style.Home}>
		<Link href="/">
          <button className={style.HomeButton}>
          
            <HomeIcon /> &nbsp;  Home
          </button>
	  </Link>
        </div>
        <div className={style.Home}>
		<Link href="/explore">
          <button className={style.HomeButton}>
            {" "}
            <ExploreIcon /> &nbsp;  Explore
          </button>
	  </Link>
        </div>
        <div className={style.Home}>
		<Link href="/message">
          <button className={style.HomeButton}>
            <MailOutlineOutlinedIcon /> &nbsp; Messages
          </button>
	  </Link>
        </div>
        <div className={style.Home}>
		<Link href="/Bookmark">
          <button className={style.HomeButton}>
            {" "}
            <BookmarkBorderOutlinedIcon /> &nbsp;  Bookmarks
          </button>
	  </Link>
        </div>
        <div className={style.Home}>
          <Link href="List">
            <button className={style.HomeButton}>
              <ListAltOutlinedIcon /> &nbsp; Lists
            </button>
	  </Link>
        </div>
        <div className={style.Home}>
		<Link href="/Profile">
               <button className={style.HomeButton}>
                   <PersonOutlinedIcon /> &nbsp;  Profile
                </button>
	  </Link>
        </div>
        <div className={style.Home}>
		<Link href='/more'>
          <button className={style.HomeButton}>
            <MoreHorizIcon /> &nbsp; More
          </button>
	  </Link>
        </div>
	<div className={style.TweetSideButton}>
		<button className={style.TweetSide}>Tweet</button>
	</div>
	 </div>
      </div>
 
       <div className={style.ProfileData}>
	       <div className={style.centerDIV}>
          <div className={style.AvatarIcon}>
            {" "}
            <Avatar/>
          </div>
	  <div className={style.Data}>
		  <h4>Hartaj Singh Sidhu</h4>
		  <h5>@thehartajsingh</h5>
	  </div>
	  <div className="more">
          <MoreHorizIcon />
	  </div>
	  </div>
        </div>
    </div>
  );
};

export default Sidebar;
