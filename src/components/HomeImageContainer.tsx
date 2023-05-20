import { Link } from "react-router-dom";

export function HomeImageContainer({ src, alt }: { src: string; alt: string }) {
  return (
    <div className='sm:relative'>
      <img
        src={src}
        alt={alt}
        className='w-[50vw] object-cover object-top h-full'
      />
      <Link
        to=''
        className={`
        ${alt === "Shop Women" ? "bottom-16" : "top-16"}
        font-light absolute text-center mx-8 p-2 px-8 m-auto h-max bg-white text-2xl hover:bg-black hover:text-white inset-0 sm:bottom-0 sm:top-0 sm:w-max sm:mx-auto sm:py-4`}
      >
        {alt}
      </Link>
    </div>
  );
}
