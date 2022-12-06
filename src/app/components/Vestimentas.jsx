import { useQuery } from "@tanstack/react-query";
import { getVestimentas } from "../../api/griegaApi";
import { shuffle } from "../../util/shuffle";

export const Vestimentas = () => {
  let { data, isLoading, isError } = useQuery({
    queryKey: ["vestimentas"],
    queryFn: getVestimentas,
  });

  if (isLoading) return <></>;
  if (isError) return <h1>Error</h1>;
  data = shuffle(data);
  return (
    <>
      {data.map((vestimenta, index) => (
        <div
          className="card mx-auto"
          style={{ width: "calc(100% - 10px)", margin: 5 }}
          key={index}
        >
          <img
            className="img-fluid mb-5"
            src={vestimenta.img}
            style={{ height: "12rem" }}
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">
              <span>{vestimenta.prenda}</span>
            </h5>
            <p className="card-text">
              <span>{vestimenta.inf}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
