import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  let errorMessage = "Oops Something Went Wrong";
  let status = "";

  if (error && error.error && error.error.message) {
    errorMessage = error.error.message;
    status = error.status;
  }

  return (
    <div>
      <h2>{errorMessage}</h2>
      <h2>{status}</h2>
      <h3>Oops Something Went Wrong</h3>
    </div>
  );
};

export default Error;