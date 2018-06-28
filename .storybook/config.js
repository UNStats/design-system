import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import Provider from "../src/components/Provider";
import pkg from "../package.json";

// Set Storybook UI options.
setOptions({
  name: `@undataforum/components v${pkg.version}`,
  showAddonPanel: false
});

// Add decorators before require.context:
// https://github.com/storybooks/storybook/issues/3246
addDecorator(story => <Provider>{story()}</Provider>);

const req = require.context("../src", true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
