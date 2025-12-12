import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  const [tab, setTab] = useState("default content.");
  function handleChangeTab(selectedTab) {
    setTab(selectedTab);
    console.log(tab);
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
            <TabButton changeTab={() => handleChangeTab("Components")}>
              Components
            </TabButton>
            <TabButton changeTab={() => handleChangeTab("JSX")}>JSX</TabButton>
            <TabButton changeTab={() => handleChangeTab("Props")}>
              Props
            </TabButton>
            <TabButton changeTab={() => handleChangeTab("State")}>
              State
            </TabButton>
          </menu>
          {tab}
        </section>
      </main>
    </div>
  );
}

export default App;
