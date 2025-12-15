import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data-with-examples.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  const [tab, setTab] = useState();
  function handleChangeTab(selectedTab) {
    setTab(selectedTab);
    // console.log(tab);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* オブジェクトのkeyを指定して使う */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* オブジェクトを全部展開してCoreConceptのcomponentに渡して使う */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton changeTab={() => handleChangeTab("components")}>
              Components
            </TabButton>
            <TabButton changeTab={() => handleChangeTab("jsx")}>JSX</TabButton>
            <TabButton changeTab={() => handleChangeTab("props")}>
              Props
            </TabButton>
            <TabButton changeTab={() => handleChangeTab("state")}>
              State
            </TabButton>
          </menu>
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
        </section>
      </main>
    </div>
  );
}

export default App;
