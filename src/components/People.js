import { useQuery } from "react-query";
import { fetchPeople } from "../api";

const People = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    "people",
    fetchPeople
  );

  return (
    <section>
      <h2 style={{ marginLeft: "1rem" }}>People</h2>

      {isLoading && <div>Loading data</div>}

      {isError && <div>Error fetching data</div>}

      {isSuccess && (
        <main>
          {data.results.map((person) => (
            <section className="card" key={person.name}>
              <h3>{person.name}</h3>
              <p>Gender - {person.gender}</p>
              <p>Birth year - {person.birth_year}</p>
            </section>
          ))}
        </main>
      )}
    </section>
  );
};

export default People;
