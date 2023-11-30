import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;
