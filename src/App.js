import { Fragment } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Comments from "./components/comments/Comments";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />

        <Route
          path="/quotes/:quoteId"
          element={
            <Fragment>
              <QuoteDetail />
              <div className="centered">
                <Link className="btn--flat" to="comments">
                  Load Comments
                </Link>
              </div>
            </Fragment>
          }
        >
          <Route path="comments" element={<Comments />} />
        </Route>

        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
