export default function Layout(props) {
  return <div>
    T{props.hello}T
    This is a layout
    {props.children}
    </div>;
}
