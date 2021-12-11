import { Fragment, useEffect  } from "react";
import { useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { Outlet } from "react-router";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if(status === 'pending') {
    return <div className='centered'>
    <LoadingSpinner />

    </div>
  }
  if(status === 'error') {
    return <p className='centered focused'>{error}</p>
  } 

  if(!loadedQuote.text) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Outlet />      
    </Fragment>
  );
};

export default QuoteDetail;
