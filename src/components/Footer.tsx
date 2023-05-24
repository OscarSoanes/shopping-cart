import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className='flex flex-col p-8 gap-16 md:flex-row'>
      <section className='flex-1 grid justify-items-center gap-8 text-center h-max'>
        <p>
          Contact our dedicated customer support team for any inquiries or
          assistance. We're here to ensure your TeeFusion experience is nothing
          short of exceptional.
        </p>

        <SocialIcons />
      </section>
      <section className='flex-1 flex gap-8 justify-between'>
        <div className='flex-1'>
          <h2 className='text-xl mb-4 text-center'>Help & Support</h2>
          <SmallLink
            locations={[
              "FAQ",
              "Delivery",
              "Returns & Refunds",
              "Orders & Payment",
              "Size Guide",
              "Store Locator",
            ]}
          />
        </div>

        <div className='flex-1'>
          <h2 className='text-xl mb-4 text-center'>About Us</h2>
          <SmallLink
            locations={[
              "About TeeFusion",
              "Company Information",
              "Counterfeit Goods",
              "Privacy Commitment",
              "Privacy Notice",
              "Cookie Notice",
              "Terms & Conditions",
            ]}
          />
        </div>
      </section>
    </footer>
  );
}

function SocialIcons() {
  const icons = [
    { icon: <AiOutlineInstagram />, href: "https://www.instagram.com/" },
    { icon: <AiOutlineTwitter />, href: "http://twitter.com/" },
    { icon: <AiFillFacebook />, href: "https://www.facebook.com/" },
    { icon: <BsTiktok />, href: "https://www.tiktok.com/en/" },
  ];

  return (
    <nav className='flex gap-8'>
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          className='text-2xl bg-black text-white p-2 rounded-sm hover:bg-gray-700 h-max'
        >
          {icon.icon}
        </a>
      ))}
    </nav>
  );
}

function SmallLink({ locations }: { locations: Array<String> }) {
  return (
    <ul className='flex flex-col gap-4 text-center'>
      {locations.map((location, index) => (
        <li
          key={index}
          className='cursor-not-allowed bg-gray-50 p-1M hover:bg-gray-100 w-32 sm:w-48 mx-auto'
        >
          {location}
        </li>
      ))}
    </ul>
  );
}
