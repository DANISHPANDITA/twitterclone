import { SearchRounded } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";
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
      </div>
    </div>
  );
}

export default Widgets;
