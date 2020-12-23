import { SearchRounded } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="Widgets">
      <div className="widgetSide">
        <div className="WidgetInput">
          <SearchRounded className="SearchIcon" />
          <input placeholder="SearchTwitter" />
        </div>
        <div className="whatsHappening">
          <h3>What's Happening</h3>
        </div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 400 }}
        />
        <TwitterHashtagButton tag={"cybersecurity"} />
        <TwitterHashtagButton tag={"RepublicTv"} />
      </div>
    </div>
  );
}

export default Widgets;
