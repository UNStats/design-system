import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import ProfileList from "./ProfileList";
import profiles from "../profiles";

// Custom render prop.
const render = (href, text) => <NavLink to={href}>{text}</NavLink>;

storiesOf("ProfileList", module)
  .add("list with 1 profile", () => (
    <ProfileList
      profiles={profiles
        .map(profile => ({
          ...profile,
          href:
            "/?selectedKind=ProfileList&selectedStory=list%20with%201%20profile"
        }))
        .slice(0, 1)}
    />
  ))
  .add("list with 2 profiles", () => (
    <ProfileList
      profiles={profiles
        .map(profile => ({
          ...profile,
          href:
            "/?selectedKind=ProfileList&selectedStory=list%20with%202%20profiles"
        }))
        .slice(0, 2)}
    />
  ))
  .add("list with 3 profiles", () => (
    <ProfileList
      profiles={profiles
        .map(profile => ({
          ...profile,
          href:
            "/?selectedKind=ProfileList&selectedStory=list%20with%203%20profiles"
        }))
        .slice(0, 3)}
    />
  ))
  .add("list with many profiles", () => (
    <ProfileList
      profiles={profiles.map(profile => ({
        ...profile,
        href:
          "/?selectedKind=ProfileList&selectedStory=list%20with%20many%20profiles"
      }))}
    />
  ))
  .add("custom render prop", () => (
    <MemoryRouter>
      <ProfileList
        profiles={profiles.map(profile => ({
          ...profile,
          href:
            "/?selectedKind=ProfileList&selectedStory=custom%20render%20prop"
        }))}
        render={render}
      />
    </MemoryRouter>
  ));
