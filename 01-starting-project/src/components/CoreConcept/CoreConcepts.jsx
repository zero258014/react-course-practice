import Section from "../Section";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data-with-examples";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {/*アロー関数の中に"()"で囲む場合はexpressionは一行ですが、改行したい時。
                    "{}"で囲む場合は複数のexpressionがあるかつreturnを書く必要がある。 */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
