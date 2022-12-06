import { useQuery } from "@tanstack/react-query";
import { getConstrucciones } from "../../api/griegaApi";
import { shuffle } from "../../util/shuffle";

export const Construcciones = () => {
  let { data, isLoading, isError } = useQuery({
    queryKey: ["construcciones"],
    queryFn: getConstrucciones,
  });

  if (isLoading) return <></>;
  if (isError) return <h1>Error</h1>;
  data = shuffle(data);
  return (
    <>
      {data.map((construccion, index) => (
        <div
          className="card mx-auto"
          style={{ width: "calc(100% - 10px)", margin: 5 }}
          key={index}
        >
          <img
            className="img-fluid mb-5"
            src={construccion.img}
            style={{ height: "12rem" }}
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">
              <span>{construccion.nombre}</span>
            </h5>

            <h2 className="card-title">
              <span>{construccion.pueblo}</span>
            </h2>
            <p className="card-text">
              <span>{construccion.inf}</span>
            </p>
            <hr />
            <p className="card-text">
              <span>{construccion.caracteristicas}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
