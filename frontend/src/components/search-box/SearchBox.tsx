import type { JSX } from "react";

interface SearchBoxProps {
    onSearchTermsChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
    results: string[];
}

export function SearchBox({onSearchTermsChanged, results}: SearchBoxProps): JSX.Element {

    return (
    <div className="card" style={{padding: "2em"}}>
        <label>Search: <input type="text" onChange={onSearchTermsChanged}/></label>
        <table style={{display: results != null ? 'block' : 'none', width: '100%', marginTop: '1em'}}>
          <thead>
            <tr>
              <th style={{display: (results && results.length > 0) ? 'block' : 'none', width: '100%', marginTop: '1em'}}>Results</th>
            </tr>
          </thead>
          <tbody>
            {results?.map((result, index) => (
              <tr key={index}>
                <td>{result}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

