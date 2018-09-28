import React from "react";
import { addDecorator, configure, setAddon } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs/react";
import Provider from "../../src/helpers/Provider";
import pkg from "../../package.json";

// Set Storybook UI options.
setOptions({
  name: `components v${pkg.version}`,
  addonPanelInRight: true
});

// Add decorators before require.context:
// https://github.com/storybooks/storybook/issues/3246

// eslint-disable-next-line
addDecorator(story => <Provider>{story()}</Provider>);
addDecorator(withKnobs);

setAddon(JSXAddon);

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
