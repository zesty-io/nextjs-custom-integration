import * as zestyBlocks from "./index";

/**
 * The ComponentSelector function takes in a data object and returns a component based on the name
 * property of the data object.
 * @returns The component that is being returned is the one specified by the `Component` variable.
 */
const ComponentSelector = ({ data }) => {
  const ComponentName = data.name;
  const Component = zestyBlocks[ComponentName];

  return <Component />;
};

export default ComponentSelector;
