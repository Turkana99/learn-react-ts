type RequestProps = {
  status: 'loading' | 'success' | 'error';
};
function Request(props: RequestProps) {
  let message = "";
  if (props.status === "loading") {
    message = "Downloading";
  }
  if (props.status === "success") {
    message = "Success";
  }
  if (props.status === "error") {
    message = "Error";
  }
  return <div>{message}</div>;
}

export default Request;
