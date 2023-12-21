import { useEffect, useState } from "react";

type DClass={
    index: string;
    name: string;
    url: string;
}
function DnDFetchData(){
    const [data, setData] = useState<DClass[]>([]);

    useEffect(()=> {
        fetch("https://www.dnd5eapi.co/api/classes/")
        .then((res)=> res.json())
        .then((data) => setData(data.results));
    }, []);

    return <div>
        <h2>Fetched D&Data</h2>
        <div>
        {data.map((entryKey, index) => (
          <div key={entryKey.index + index}>
            <h3>{entryKey.name}</h3>
            <ul>
              {Object.entries(entryKey).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
}

export default DnDFetchData;