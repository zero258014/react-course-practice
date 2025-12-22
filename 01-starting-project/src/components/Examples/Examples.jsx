import { useState } from "react";

import Section from "../Section";
import TabButton from "../TabButton";
import Tabs from "../Tabs";
import { EXAMPLES } from "../../data-with-examples";

export default function Examples() {
  const [tab, setTab] = useState();
  function handleChangeTab(selectedTab) {
    setTab(selectedTab);
    // console.log(tab);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={tab === "components"}
              onClick={() => handleChangeTab("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tab === "jsx"}
              onClick={() => handleChangeTab("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tab === "props"}
              onClick={() => handleChangeTab("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tab === "state"}
              onClick={() => handleChangeTab("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!tab ? <p>Please select a topic.</p> : null}
        {tab ? (
          <div id="tab-content">
            <h3>{EXAMPLES[tab].title}</h3>
            <p>{EXAMPLES[tab].description}</p>
            <pre>
              <code>{EXAMPLES[tab].code}</code>
            </pre>
          </div>
        ) : null}
      </Tabs>
    </Section>
  );
}
