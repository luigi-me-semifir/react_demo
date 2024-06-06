import { useParams } from "react-router-dom";

const MonId = () => {
  const { id } = useParams();

  return <div>MonId est le {id}</div>;
};

export default MonId;
