import { useParams, useNavigate, Link } from "react-router-dom";
import { getById } from "../functions/api";
import { useEffect, useState } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export function Product() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params["*"]!;

  const [data, setData] = useState(Object);
  const [images, setImages] = useState(Array<string>);

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
      setImages([image.default]);
    });

    data["alternate-images"].forEach((nextImage: string) => {
      import(`../media/${nextImage}`).then((alternate) => {
        setImages((prevImages) => {
          const toSet = [...prevImages, alternate.default];
          return toSet;
        });
      });
    });
  }, [data]);

  return (
    data.name && (
      <main className='md:py-4 md:px-8'>
        <p className='flex gap-4 py-4 px-8 md:px-0 md:py-2 text-gray-600'>
          <Link to='/' className='hover:text-gray-700'>
            Home
          </Link>{" "}
          -{" "}
          <Link to={`/shop/${data.for}`} className='hover:text-gray-700'>
            {data.for.charAt(0).toUpperCase()}
            {data.for.substring(1)}
          </Link>
        </p>

        <div className='grid md:grid-cols-3 gap-8'>
          <section className='flex md:col-span-2 md:grid images gap-2 overflow-x-auto overflow-ellipsis snap-x snap-mandatory'>
            {images.map((image, index) => (
              <div className='min-w-[100vw] snap-center relative'>
                <img
                  src={image}
                  alt={`${index + 1}. ${data.name} ${data.brand}`}
                  className=''
                />

                {index !== 0 && (
                  <AiOutlineArrowLeft className='absolute bottom-4 left-2 text-5xl bg-white p-2 rounded' />
                )}
                {index !== images.length - 1 && (
                  <AiOutlineArrowRight className='absolute bottom-4 right-2 text-5xl bg-white p-2 rounded' />
                )}
              </div>
            ))}
          </section>

          <section></section>
        </div>
      </main>
    )
  );
}
