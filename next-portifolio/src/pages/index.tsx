import Image from "next/image";
import Link from "next/link";

import TopBar from "@/components/TopBar";
import BarSelector from "@/components/BarSelector";
import { useState } from "react";

const Home = () => {
  const [option, setOption] = useState<number>(1);

  return (
    <main>
      <TopBar/>
      <div>
        <p>
            Foto do Paulo que leva para sua página inicial do github
        </p>
      </div>

      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </a>
      </div>

      <BarSelector setOption={setOption}/>

      <div>
        { option === 1 ? <div>
          <Link href={"/wish-list"}>
            <div>
              Projeto Wish List com seu ícone
            </div>
          </Link>
          <Link href={"/scheduling"}>
            <div>
              Projeto Scheduling com seu ícone
            </div>
          </Link>
        </div>
        : 
        <div>
          Descrição do meu currículo!
        </div>
        }
      </div>

    </main>
  );
}

export default Home;
