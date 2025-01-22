"use client";

import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import BusinessIcon from "@mui/icons-material/Business";
import EventIcon from "@mui/icons-material/Event";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SchoolIcon from "@mui/icons-material/School";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  const router = useRouter();
  const [usersOpen, setUsersOpen] = React.useState(false);

  const handleUsersClick = () => {
    setUsersOpen(!usersOpen);
  };

  return (
    <div className="h-screen bg-primary-dark text-white w-64 flex flex-col">
      <List>
        {/* Admin Dashboard */}
        <ListItem button onClick={() => router.push("/dashboards/admin")}>
          <ListItemIcon>
            <EventIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Users Section */}
        <ListItem button onClick={handleUsersClick}>
          <ListItemIcon>
            <PeopleIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {usersOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={usersOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className="pl-12"
              onClick={() => router.push("/dashboards/admin/Users/brands")}
            >
              <ListItemIcon>
                <BusinessIcon className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Brands" />
            </ListItem>
            <ListItem
              button
              className="pl-12"
              onClick={() => router.push("/dashboards/admin/Users/influencers")}
            >
              <ListItemIcon>
                <GroupsIcon className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Influencers" />
            </ListItem>
          </List>
        </Collapse>

        {/* Sessions */}
        <ListItem
          button
          onClick={() => router.push("/dashboards/admin/sessions")}
        >
          <ListItemIcon>
            <EventIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Sessions" />
        </ListItem>

        {/* Sales */}
        <ListItem
          button
          onClick={() => router.push("/dashboards/admin/sales")}
        >
          <ListItemIcon>
            <ShoppingCartIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Sales" />
        </ListItem>

        {/* Certifications */}
        <ListItem
          button
          onClick={() => router.push("/dashboards/admin/certifications")}
        >
          <ListItemIcon>
            <SchoolIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Certifications" />
        </ListItem>

        {/* Reports */}
        <ListItem
          button
          onClick={() => router.push("/dashboards/admin/reports")}
        >
          <ListItemIcon>
            <AssessmentIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
