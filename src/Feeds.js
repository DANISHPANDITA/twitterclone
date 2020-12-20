import { Avatar, IconButton, TextareaAutosize } from "@material-ui/core";
import {
  EventRounded,
  GifRounded,
  PermMediaRounded,
  PollRounded,
  SentimentSatisfiedRounded,
} from "@material-ui/icons";
import React from "react";
import "./Feeds.css";
function Feeds() {
  return (
    <div className="Feeds">
      <div className="top">
        <h3>Home</h3>
        <hr />
        <div className="tweetArea">
          <div className="tweetWrite">
            <Avatar
              src="https://lh3.googleusercontent.com/ogw/ADGmqu-lOEQqtZzqvcw_1RkjqPW-2oQmxEsLh8aDRXhn9w=s32-c-mo"
              alt=""
            />
            <TextareaAutosize
              className="input"
              placeholder="What's Happening ?"
            />
          </div>
          <div className="inputFooter">
            <div className="inputs">
              <IconButton>
                {" "}
                <PermMediaRounded className="inputButtons" />
              </IconButton>
              <IconButton>
                <GifRounded className="inputButtons" />
              </IconButton>
              <IconButton>
                <PollRounded className="inputButtons" />
              </IconButton>
              <IconButton>
                <SentimentSatisfiedRounded className="inputButtons" />
              </IconButton>
              <IconButton>
                <EventRounded className="inputButtons" />
              </IconButton>
            </div>
            <button className="tweetButton">Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
