import { Avatar, IconButton } from "@material-ui/core";
import {
  ChatBubbleOutlineRounded,
  FavoriteBorderRounded,
  LoopRounded,
  MoreHorizRounded,
  PublishRounded,
  VerifiedUser,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";
function Post({
  post,
  displayname,
  avatar,
  timestamp,
  tweet,
  username,
  verified,
}) {
  return (
    <div className="Post">
      <div className="postHeader">
        <div className="leftHeader">
          <Avatar className="postAvatar" src={avatar} alt="Cant show" />
          <h4>{displayname}</h4>
          {verified === "true" && <VerifiedUser className="verifiedIcon" />}
          <p>@{username}</p>
          <p className="timestamp">
            {new Date(timestamp?.toDate()).toTimeString().slice(0, 8)}
          </p>
        </div>
        <div className="rightHeader">
          <IconButton>
            <MoreHorizRounded className="moreOptionHeader" />
          </IconButton>
        </div>
      </div>
      <p className="tweetedText">{tweet}</p>
      <img className="postMedia" src={post} alt="Can't load" />
      <div className="bottomIcons">
        <IconButton>
          <ChatBubbleOutlineRounded className="bottomBtn" />
        </IconButton>
        <IconButton>
          <LoopRounded className="bottomBtn" />
        </IconButton>
        <IconButton>
          <FavoriteBorderRounded className="bottomBtn" />
        </IconButton>
        <IconButton>
          <PublishRounded className="bottomBtn" />
        </IconButton>
      </div>
    </div>
  );
}

export default Post;
