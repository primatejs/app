export default function Layout(props) {
  console.log(props.hello);

  return <div>
    T{props.hello}T
    This is a layout
    {props.children}
    </div>;
}
