export default function Edit(props) {
  return <form>
    <input name="name"></input>
    <input type="submit" value="submit" />
    {props.error ? "missing data": ""}
  </form>;
}
