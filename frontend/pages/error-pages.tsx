import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage(): JSX.Element {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Lo siento, un error ha ocurrido.</p>
      <p>
        <i>
          {isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : error instanceof Error
            ? error.message
            : "Error desconocido"}
        </i>
      </p>
    </div>
  );
}
