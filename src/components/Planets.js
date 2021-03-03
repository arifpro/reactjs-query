import { useState } from "react";
import { useQuery } from "react-query";
import { fetchPlanets } from "../api";

const Planets = () => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isFetching,
    isError,
    isSuccess,
    data,
    isPreviousData,
  } = useQuery(["planets", page], () => fetchPlanets(page), {
    keepPreviousData: true,
  });

  return (
    <section>
      <h2 style={{ marginLeft: "1rem" }}>Planets</h2>

      {isLoading && <div>Loading data</div>}

      {isError && <div>Error fetching data</div>}

      {isSuccess && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              !isPreviousData && data.next && setPage((old) => old + 1)
            }
            // Disable the Next Page button until we know a next page is available
            disabled={isPreviousData || !data.next}
          >
            Next page
          </button>
          <main>
            {data.results?.map((planet) => (
              <section className="card" key={planet.name}>
                <h3>{planet.name}</h3>
                <p>Population - {planet.population}</p>
                <p>Terrain - {planet.terrain}</p>
              </section>
            ))}
          </main>
          {isFetching ? <span> Loading...</span> : null}
        </>
      )}
    </section>
  );
};

export default Planets;
