import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

interface RoutingError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RoutingError;

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
