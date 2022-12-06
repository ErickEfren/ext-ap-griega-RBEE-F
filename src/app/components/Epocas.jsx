import { useQuery } from "@tanstack/react-query";
import { getEpocas } from "../../api/griegaApi";
import { shuffle } from "../../util/shuffle";

export const Epocas = () => {
  let { data, isLoading, isError } = useQuery({
    queryKey: ["epocas"],
    queryFn: getEpocas,
  });

  if (isLoading) return <></>;
  if (isError) return <h1>Error</h1>;

  data = shuffle(data);
  return (
    <>
      {data.map((epoca, index) => (
        <div
          className="card mx-auto"
          style={{ width: "calc(100% - 10px)", margin: 5 }}
          key={index}
        >
          <img
            className="img-fluid mb-5"
            src={epoca.img}
            style={{ height: "15rem" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <span>{epoca.nombre}</span>
            </h5>
            <p className="card-text">
              <span>{epoca.fecha}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
