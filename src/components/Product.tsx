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

  function changeSlider(e: React.MouseEvent, calc: String) {
    console.log(e);
    const eventTarget = e.target as HTMLElement;
    const id = parseInt(eventTarget.closest("div")!.getAttribute("id")!);

    const width = window.innerWidth;

    // Calculates the movement from start position based on id
    const calculation = calc === "+" ? (id + 1) * width : (id - 1) * width;

    const container = document.getElementById("overflow-container");
    container?.scroll(calculation, 0);

    console.log(calculation);
    // temp1.scroll(478 * parseInt(3), 0)
  }

  return (
    data.name && (
      <main className='md:py-4 md:px-8'>
        <p className='flex gap-4 py-4 px-8 md:px-0 md:py-2 text-gray-600'>
          <Link to='/' className='hover:text-gray-700 underline'>
            Home
          </Link>{" "}
          -{" "}
          <Link
            to={`/shop/${data.for}`}
            className='hover:text-gray-700 underline'
          >
            {data.for.charAt(0).toUpperCase()}
            {data.for.substring(1)}
          </Link>
        </p>

        <div className='grid md:grid-cols-3 gap-8'>
          <section
            className='flex md:col-span-2 md:grid images gap-2 overflow-x-auto overflow-ellipsis snap-x snap-mandatory'
            id='overflow-container'
          >
            {images.map((image, index) => (
              <div
                className='min-w-[100vw] snap-center relative md:min-w-full'
                key={index}
                id={`${index}`}
              >
                <img
                  src={image}
                  alt={`${index + 1}. ${data.name} ${data.brand}`}
                  className=''
                />

                {index !== 0 && (
                  <button
                    title='Scroll to previous image?'
                    className='md:hidden md:aria-hidden absolute bottom-4 left-2 bg-white p-2 rounded '
                    onClick={(e) => changeSlider(e, "-")}
                  >
                    <AiOutlineArrowLeft className='text-5x' />
                  </button>
                )}
                {index !== images.length - 1 && (
                  <button
                    title='Scroll to next image?'
                    className='md:hidden md:aria-hidden absolute bottom-4 right-2 bg-white p-2 rounded'
                    onClick={(e) => changeSlider(e, "+")}
                  >
                    <AiOutlineArrowRight className='text-5x' />
                  </button>
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
