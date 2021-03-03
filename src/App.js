import { useState } from "react";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query-devtools";

// create a client for react-query
const queryClient = new QueryClient();

const App = () => {
  let [page, setPage] = useState("planets");

  return (
    <>
      <section className="App">
        <h1>Star Wars Info</h1>

        <Navbar setPage={setPage} />

        <main className="content">
          <QueryClientProvider client={queryClient}>
            {page === "planets" ? <Planets /> : <People />}
          </QueryClientProvider>
        </main>
      </section>

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
};

export default App;
