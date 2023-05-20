import WomenSide from "../media/women-main.webp";
import MenSide from "../media/men-main.jpg";
import { HomeImageContainer } from "./HomeImageContainer";

export default function HomePage() {
  return (
    <main>
      <section className='flex gap-1 relative'>
        <HomeImageContainer src={WomenSide} alt='Shop Women' />
        <HomeImageContainer src={MenSide} alt='Shop Men' />
      </section>
    </main>
  );
}
