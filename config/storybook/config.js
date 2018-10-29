import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";
import Provider from "../../src/helpers/Provider";
import pkg from "../../package.json";

// Add decorators before require.context:
// https://github.com/storybooks/storybook/issues/3246

addDecorator(
  withOptions({
    // ${pkg.name} is too long.
    name: `UNDataForum components v${pkg.version}`,
    addonPanelInRight: true
  })
);
// eslint-disable-next-line
addDecorator(story => <Provider>{story()}</Provider>);
addDecorator(withKnobs);

function loadStories() {
  // Sort order of nested stories is determined by loading order.

  // Load primitives.
  let req = require.context("../../src/primitives", true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));

  // Load composites.
  req = require.context("../../src/composites", true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
