import { toJSON } from "@zesty-io/webengine-json";
import { AutoLayout } from "@zesty-io/react-autolayout";

import ZestyConfig from "/zesty.config.json";
import ComponentSelector from "../components/ComponentSelector";

export const getServerSideProps = async (context) => {
  console.log("the url can be used to auto fill the path", context.resolvedUrl);
  const content = await toJSON(ZestyConfig.stage, "layouts-test-page/");
  return { props: { content } };
};

const LayoutsTestPage = ({ content }) => {
  return (
    <AutoLayout
      content={content}
      components={{
        /**
         * Autolayout will automatically pass in all props to ComponentSeletor
         * Component Selector is the one responsible mapping the components from auto-layout to the react component
         */
        component: ComponentSelector,
      }}
    />
  );
};

export default LayoutsTestPage;
