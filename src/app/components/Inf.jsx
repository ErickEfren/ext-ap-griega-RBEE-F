import { useQuery } from "@tanstack/react-query";
import { getInf } from "../../api/griegaApi";

export const Inf = () => {
  let { data, isLoading, isError } = useQuery({
    queryKey: ["inf"],
    queryFn: getInf,
  });

  if (isLoading) return <></>;
  if (isError) return <h1>Error</h1>;

  data = data[0];
  return (
    <>
      <p className="lead">
        <span>
          <i>Lengua:</i> {data.lengua}
        </span>
      </p>
      <p className="lead">
        <span>
          <i>Religion:</i> {data.religion}
        </span>
      </p>
      <p className="lead">
        <span>
          <i>Locación:</i> {data.locacion.inf}
        </span>
      </p>
      <img
        className="img-fluid d-block mx-auto mb-5"
        src={data.locacion.img}
        alt="..."
        style={{
          borderRadius: "10%",
        }}
      />
    </>
  );
};
