export default function Layout(props) {
  return <div>
    <h2>{props.hello}</h2>
    This is a inner layout
    {props.children}
    </div>;
}
