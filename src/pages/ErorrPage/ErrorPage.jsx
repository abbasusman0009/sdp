import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex justify-center items-center">
      <p className="text-red-700 capitalize">OOPS Page Not found</p>
      <p className="text-red-700 capitalize">Sorry, Unexpect error has occured</p>
      <i>{error.statusText || error.message}</i>
    </div>
  )
}
