export default function Layout({children, data}) {
  const {hello} = data;

  return <div>
    T{hello}T
    This is a layout
    {children}
    </div>;
}
