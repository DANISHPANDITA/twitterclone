import { Avatar, IconButton, TextareaAutosize } from "@material-ui/core";
import {
  EventRounded,
  GifRounded,
  PermMediaRounded,
  PollRounded,
  SentimentSatisfiedRounded,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Feeds.css";
import Picker from "emoji-picker-react";
import Post from "./Post";
import { db, storage } from "./firebase";
import firebase from "firebase";

function Feeds() {
  const [TextInput, setTextInput] = useState("");
  const [image, setimage] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [sate, setsate] = useState(false);
  const [Tweets, setTweets] = useState([]);
  const [progress, setprogress] = useState("");

  const picker = () => {
    setsate(true);
  };

  useEffect(() => {
    db.collection("Twitter")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            tweet: doc.data(),
          }))
        )
      );
  }, []);

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
      const file = event.target.files[0];
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
      const file = event.target.files[0];
      setimage(file);
    });
  };
  const handleWrittenTweet = (e) => {
    e.preventDefault();
    if (image) {
      const uploadTask = storage.ref(`image/${image}.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + progress + "% done");
          setprogress(progress);
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
            default:
              console.log("..");
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            db.collection("Twitter").add({
              tweet: TextInput,
              displayname: "Danish",
              username: "Pandita",
              avatar:
                "https://lh3.googleusercontent.com/ogw/ADGmqu-lOEQqtZzqvcw_1RkjqPW-2oQmxEsLh8aDRXhn9w=s83-c-mo",
              verified: "true",
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              post: downloadURL,
            });
          });
        }
      );
      setTextInput("");
    }
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
                onClick={handleWrittenTweet}
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
        {Tweets.map(({ id, tweet }) => (
          <Post
            key={id}
            post={tweet.post}
            displayname={tweet.displayname}
            avatar={tweet.avatar}
            timestamp={tweet.timestamp}
            tweet={tweet.tweet}
            username={tweet.username}
            verified={tweet.verified}
          />
        ))}
      </div>
    </div>
  );
}

export default Feeds;
