export default function TabButton(props) {
  return (
    <li>
      <button onClick={props.changeTab}>{props.children}</button>
    </li>
  );
}
