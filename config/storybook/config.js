import React from "react";
import {
  addDecorator,
  configure,
  getStorybook,
  setAddon
} from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import "@storybook/addon-console";
import createPercyAddon from "@percy-io/percy-storybook";
import Provider from "../../src/components/Provider";
import pkg from "../../package.json";

// Set Storybook UI options.
setOptions({
  name: `@undataforum/components v${pkg.version}`
});

// Percy visual regression testing.
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

// Add decorators before require.context:
// https://github.com/storybooks/storybook/issues/3246

// eslint-disable-next-line react/jsx-filename-extension
addDecorator(story => <Provider>{story()}</Provider>);

const req = require.context("../../src", true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

serializeStories(getStorybook);
