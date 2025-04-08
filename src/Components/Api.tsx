import { useState, useEffect } from "react";

interface Root {
  Search: Search[];
  totalResults: string;
  Response: string;
}

interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function Api() {
  const [data, setData] = useState<Root | null>(null);

  useEffect(() => {
    const GetPost = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=b7251738&s=the big bang&page=1",
        {
          method: "GET",
        }
      );
      const json = (await response.json()) as Root;
      if (response.ok) setData(json);
    };
    GetPost();
  }, [data]);

  return (
    <div>
      <h1>Risultati della ricerca</h1>
      <ul>
        {data?.Search.map((x) => <li>{x.Title} - {x.Type}</li>)}
      </ul>
    </div>
  );
}

export default Api;
