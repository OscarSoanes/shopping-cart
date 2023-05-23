import { useParams, useNavigate, Link } from "react-router-dom";
import { getById } from "../functions/api";
import { useEffect, useState } from "react";

export function Product() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params["*"]!;

  const [data, setData] = useState(Object);
  const [image, setImage] = useState("");
  const [alternateImages, setAlternateImages] = useState(Array<string>);

  useEffect(() => {
    const data = getById(parseInt(id));
    if (!data) {
      navigate("/404");
      return;
    }
    setData(data);
  }, [id, navigate]);

  useEffect(() => {
    if (!data.image) {
      return;
    }

    // Setting Images
    import(`../media/${data.image}`).then((image) => {
      setImage(image.default);
    });

    data["alternate-images"].forEach((nextImage: string) => {
      import(`../media/${nextImage}`).then((alternate) => {
        setAlternateImages((prevImages) => {
          const toSet = [...prevImages, alternate.default];
          return toSet;
        });
      });
    });
  }, [data]);

  return (
    data.name && (
      <main>
        <p>
          <Link to='/'>Home</Link> -{" "}
          <Link to={`/shop/${data.for}`}>
            {data.for.charAt(0).toUpperCase()}
            {data.for.substring(1)}
          </Link>
        </p>

        <img src={image} alt={`1. ${data.name} ${data.brand}`} />
        {alternateImages.map((alternate, index) => (
          <img
            src={alternate}
            alt={`${index + 2}. ${data.name} ${data.brand}`}
          />
        ))}
      </main>
    )
  );
}
