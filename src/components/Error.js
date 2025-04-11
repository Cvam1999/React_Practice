import { useRouteError } from "react-router";



const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div className="error">
      <h2>Oops!</h2>
      <h2>Page Not Found</h2>
      <h3>{err.status + " : " + err.statusText}</h3>
      <h3>{err.data}</h3>
    </div>
  );
}

export default Error;