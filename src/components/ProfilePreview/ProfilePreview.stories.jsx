import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import ProfilePreview from "./ProfilePreview";
import profiles from "../../profiles";

storiesOf("components/ProfilePreview", module)
  .add("with jobtitle and organization", () => (
    <ProfilePreview {...profiles[0]} />
  ))
  .add("multiple siblings", () => (
    <React.Fragment>
      <ProfilePreview {...profiles[1]} pb={3} mb={3} />
      <ProfilePreview {...profiles[2]} pb={3} mb={3} />
    </React.Fragment>
  ))
  .add("no jobtitle", () => {
    const { jobtitle, ...profile } = profiles[3];
    return <ProfilePreview {...profile} />;
  })
  .add("no organization", () => {
    const { organization, ...profile } = profiles[4];
    return <ProfilePreview {...profile} />;
  })
  .add("custom color", () => (
    <React.Fragment>
      <ProfilePreview {...profiles[5]} pb={3} mb={3} color="green" />
      <ProfilePreview {...profiles[6]} pb={3} mb={3} color="green" />
    </React.Fragment>
  ))
  .add("custom anchor", () => (
    <MemoryRouter>
      <ProfilePreview
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
        {...profiles[7]}
      />
    </MemoryRouter>
  ));
