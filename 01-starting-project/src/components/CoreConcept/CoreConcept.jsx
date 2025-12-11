import "./CoreConcept.css";

// 引数はpropsを使ってもいいですし、{key}の形で使ってもいいです。
export default function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
