import { Avatar, IconButton, TextareaAutosize } from "@material-ui/core";
import {
  EventRounded,
  GifRounded,
  PermMediaRounded,
  PollRounded,
  SentimentSatisfiedRounded,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./Feeds.css";
import Picker from "emoji-picker-react";
import Post from "./Post";

function Feeds() {
  const [TextInput, setTextInput] = useState("");
  const [image, setimage] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [sate, setsate] = useState(false);

  const picker = () => {
    setsate(true);
  };

  function buildFileSelector() {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("accept", "image/png, image/jpeg");
    return fileSelector;
  }

  const handleFileSelect = (e) => {
    e.preventDefault();
    const fileSelector = buildFileSelector();
    fileSelector.click();
    fileSelector.addEventListener("change", (event) => {
      const file = event.target.files;
      setimage(file);
    });
  };

  function buildGifSelector() {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("accept", "image/gif");
    return fileSelector;
  }
  const GIFFileSelect = (e) => {
    e.preventDefault();
    const gifSelector = buildGifSelector();
    gifSelector.click();
    gifSelector.addEventListener("change", (event) => {
      const file = event.target.files;
      console.log(file);
    });
  };
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject.emoji);
    setTextInput(TextInput.concat(chosenEmoji));
  };

  return (
    <div className="Feeds">
      <div className="top">
        <h3>Home</h3>
      </div>
      <div>
        <form>
          <div className="tweetArea">
            <div className="tweetWrite">
              <Avatar
                src="https://lh3.googleusercontent.com/ogw/ADGmqu-lOEQqtZzqvcw_1RkjqPW-2oQmxEsLh8aDRXhn9w=s32-c-mo"
                alt=""
              />
              <TextareaAutosize
                value={TextInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="input"
                placeholder="What's Happening ?"
              />
            </div>
            <div className="inputFooter">
              <div className="inputs">
                <IconButton>
                  {" "}
                  <PermMediaRounded
                    className="inputButtons"
                    onClick={handleFileSelect}
                  >
                    {" "}
                  </PermMediaRounded>
                </IconButton>
                <IconButton>
                  <GifRounded
                    className="inputButtons"
                    onClick={GIFFileSelect}
                  />
                </IconButton>
                <IconButton>
                  <PollRounded className="inputButtons" />
                </IconButton>
                <IconButton>
                  <SentimentSatisfiedRounded
                    className="inputButtons"
                    onClick={picker}
                  />
                </IconButton>
                <IconButton>
                  <EventRounded className="inputButtons" />
                </IconButton>
              </div>

              <button
                disabled={!TextInput}
                onClick={(e) => {
                  e.preventDefault();
                  setTextInput("");
                }}
                className="tweetButton"
              >
                Tweet
              </button>
            </div>
          </div>
          {sate && (
            <Picker
              className="picker_emoji"
              onEmojiClick={onEmojiClick}
              disableSearchBar={true}
            />
          )}
        </form>
      </div>
      <div className="post">
        <Post
          post="https://cdn.eso.org/images/thumb300y/eso1907a.jpg"
          username="Danish"
          displayname="Pandita"
          avatar="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          timestamp="3h"
          verified="false"
          tweet="First tweet in clone app feeling excited....Yeah"
        />
        <Post
          post="https://static.toiimg.com/photo/72975551.cms"
          username="Danish"
          displayname="Pandita"
          avatar="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
          timestamp="9h"
          verified="false"
          tweet="Making something"
        />
      </div>
    </div>
  );
}

export default Feeds;
