import {
  BookmarkBorderOutlined,
  MailOutline,
  MoreHorizOutlined,
  PermIdentityOutlined,
  SubjectRounded,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SidebarOptions from "./SidebarOptions";
function Sidebar() {
  return (
    <div className="Sidebar">
      <Twitter className="twittericon" />
      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={NotificationsIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutline} text="Messages" />
      <SidebarOptions Icon={BookmarkBorderOutlined} text="Bookmarks" />
      <SidebarOptions Icon={SubjectRounded} text="Lists" />
      <SidebarOptions Icon={PermIdentityOutlined} text="Profile" />
      <SidebarOptions Icon={MoreHorizOutlined} text="More" />
      <button>Tweet</button>
    </div>
  );
}

export default Sidebar;
