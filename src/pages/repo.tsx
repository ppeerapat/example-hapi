import React from "react";
const RepoPage: React.FC = (props: any) => {
  return (
    <html>
      <body>
        <table>
          <tr>
            <th>Repository Name</th>
            <th>Author</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
          {props.items?.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.owner.login}</td>
              <td>{e.description}</td>
              <td>
                <a href={e.svn_url}>link</a>
              </td>
            </tr>
          ))}
        </table>
      </body>
    </html>
  );
};

export default RepoPage;
