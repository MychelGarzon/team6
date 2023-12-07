import { useRouteError } from "react-router-dom";
import { useEffect } from "react";

function ErrorPage() {
  const error = useRouteError();
      //Page title update
      useEffect(() => {
    
        document.title = `Error | JUDOMYKA`;
  
      }, []);

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;
