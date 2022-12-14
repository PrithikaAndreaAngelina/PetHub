const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Requirements</th>
            <th>Location</th>
            <th>Email</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;