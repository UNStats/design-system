import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import List from "./List";
import ProfilePreview from "../ProfilePreview";
import profiles from "../../profiles";

const item = props => <ProfilePreview {...props} pb={3} mb={3} px={[0, 2]} />;

storiesOf("components/List", module)
  .add("1 item", () => <List item={item} values={profiles.slice(0, 1)} />)
  .add("2 items", () => <List item={item} values={profiles.slice(0, 2)} />)
  .add("3 items", () => <List item={item} values={profiles.slice(0, 3)} />)
  .add("many items", () => <List item={item} values={profiles} />)
  .add("custom color", () => (
    <List color="green" item={item} values={profiles} />
  ))
  .add("custom anchor", () => (
    <MemoryRouter>
      <List
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
        item={item}
        values={profiles}
      />
    </MemoryRouter>
  ));
