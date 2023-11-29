'user client';
type tableIem = {
  id: number;
  title: String;
};
export function TableOne({ id, title }: tableIem) {
  return (
    <table border={2}>
      <tr>
        <thead className="flex gap-1 items-center m-2">
          <th>ID</th>
          <th>Title</th>
        </thead>
      </tr>
      <tr>
        <tbody className="flex gap-1 items-center  m-2">
          <td>{id + 1}</td>
          <td>{title}</td>
        </tbody>
      </tr>
    </table>
  );
}
