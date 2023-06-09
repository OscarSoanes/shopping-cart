import { useParams, useNavigate, Link } from "react-router-dom";
import { getById } from "../functions/api";
import { useEffect, useState } from "react";

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiFillWarning,
} from "react-icons/ai";

export function Product({ setItemToBasket }: { setItemToBasket: Function }) {
  const params = useParams();
  const navigate = useNavigate();
  const id = params["*"]!;

  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const [data, setData] = useState(Object);
  const [images, setImages] = useState(Array<string>);
  const [selected, setSelected] = useState("");
  const [selectedError, setSelectedError] = useState(false);

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
  }

  function selectedSize(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    const size = target.textContent!;

    if (selectedError) {
      setSelectedError(false);
    }

    setSelected(size);
  }

  function addToBasket() {
    const quantity = document.getElementById("quantity") as HTMLSelectElement;
    const size = quantity.value;

    if (!selected) {
      setSelectedError(true);
      return;
    }

    setSelected("");
    quantity.value = "1";

    setItemToBasket(id, selected, size);
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
                    className='md:hidden md:aria-hidden absolute bottom-4 left-2 bg-white p-2 rounded text-3xl'
                    onClick={(e) => changeSlider(e, "-")}
                  >
                    <AiOutlineArrowLeft />
                  </button>
                )}
                {index !== images.length - 1 && (
                  <button
                    title='Scroll to next image?'
                    className='md:hidden md:aria-hidden absolute bottom-4 right-2 bg-white p-2 rounded text-3xl'
                    onClick={(e) => changeSlider(e, "+")}
                  >
                    <AiOutlineArrowRight />
                  </button>
                )}
              </div>
            ))}
          </section>

          <section className='px-8 py-2'>
            <h2 className='text-2xl font-bold mb-1'>{data.name}</h2>
            <p className='text-gray-700 mb-4'>{data.brand}</p>
            <p className='text-xl text-gray-600'>
              <span className='font-bold text-black'>
                £{data.price.toFixed(2)}{" "}
              </span>
              (inc. VAT)
            </p>
            <section className='py-6'>
              <h3 className='pb-2 text-gray-700 text-xl'>Size:</h3>
              <div className='grid grid-cols-4 gap-1'>
                {sizes.map((size, index) => (
                  <button
                    className={`${selected === size && "border-gray-600"}
                    border-gray-300 hover:border-gray-600 border h-16`}
                    onClick={(e) => selectedSize(e)}
                    key={index}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedError && (
                <div className='flex items-center gap-2 justify-center'>
                  <AiFillWarning />
                  <p className='font-bold'>Please select a size</p>
                </div>
              )}
            </section>

            <section className='mb-8'>
              <label htmlFor='quantity' className='text-xl text-gray-700'>
                Quantity:
                <select className='w-full h-12 p-2 rounded-none' id='quantity'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                </select>
              </label>
            </section>

            <div className='flex gap-1'>
              <button
                className='flex-1 p-2 bg-black text-white hover:bg-white border-2 border-black hover:text-black'
                onClick={() => addToBasket()}
              >
                Add to Cart
              </button>
              <button className='text-3xl border-2 border-black w-10 cursor-not-allowed'>
                <AiOutlineHeart className='mx-auto' />
              </button>
            </div>

            <p className='py-4 text-center'>
              Free delivery on all orders over £30 + 90-day free returns
            </p>

            <section>
              <h3 className='text-xl text-gray-700'>Details: </h3>
              <p className='m-2 p-4 py-8 bg-gray-100'>{data.description}</p>
            </section>
          </section>
        </div>
      </main>
    )
  );
}
