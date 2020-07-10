import React from "react";
import { action } from "@storybook/addon-actions";
import TestComponent from ".";
import path from "path";

const pathArray = __filename.split("\\");

export default {
  title: pathArray[pathArray.length - 2],
  component: TestComponent,
  parameters: {
    assets: [
      pathArray[pathArray.length - 3] + "/" + pathArray[pathArray.length - 2],
    ],
  },
};

export const Default = () => (
  <TestComponent onClick={action("clicked")}>Hello Button</TestComponent>
);
