import { Avatar, IconButton } from "@material-ui/core";
import {
  ChatBubbleOutlineRounded,
  FavoriteBorderRounded,
  LoopRounded,
  MoreHorizRounded,
  PublishRounded,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";
function Post({
  username,
  displayname,
  avatar,
  timestamp,
  verified,
  post,
  tweet,
}) {
  return (
    <div className="Post">
      <div className="postHeader">
        <div className="leftHeader">
          <Avatar className="postAvatar" src={avatar} alt="" />
          <h4>{displayname}</h4>
          <p>@{username}</p>
          <p>{timestamp}</p>
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
