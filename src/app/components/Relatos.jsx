import { useQuery } from "@tanstack/react-query";
import { getRelatos } from "../../api/griegaApi";
import { shuffle } from "../../util/shuffle";

export const Relatos = () => {
  let { data, isLoading, isError } = useQuery({
    queryKey: ["relatos"],
    queryFn: getRelatos,
  });

  if (isLoading) return <></>;
  if (isError) return <h1>Error</h1>;
  data = shuffle(data);
  return (
    <>
      {data.map((relato, index) => (
        <div
          className="card mx-auto"
          style={{ width: "calc(100% - 10px)", margin: 5 }}
          key={index}
        >
          <img className="img-fluid mb-5" src={relato.img} alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <span>{relato.titulo}</span>
            </h5>
            <p className="card-text">
              <span>{relato.tipo}</span>
            </p>
            <hr />
            <p className="card-text">
              <span>{relato.contenido}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
