import Image from "next/image";
import Link from "next/link";

import {Stack, Card} from "react-bootstrap"
export default function Home() {
  return (
    <>
    <header>
    <h1>
        Projects
    </h1>
    </header>
    <Stack className="p-3" direction="vertical" gap={3}>
    <Stack className="pt-2" direction="horizontal" gap={3}>
    <div>
    <Link href="https://daftnewt.itch.io/nothings-wrong-in-subsistia"> 
    <Image src="/nwis.png" alt="" width={500} height={500}/>
    </Link>
    </div>
    Nothing's Wrong in Subsistia is a single-player, social deduction game set in a '50s-Americana-obsessed doomsday cult.
    <br/>
    <br/>
    Made in Unity for university coursework under the Professional Project module, with guidance from Team Terrible
    <br/>
    <br/>
    I worked as a programmer in this game, and developed designer friendly tools to reduce the barrier between designers working within the engine


</Stack>

    <Stack className="pt-2" direction="horizontal" gap={3}>
    <div>
    <Link href="https://freyaval-dev.itch.io/untitled-paul-game"> 
    <Image src="/paul.png" alt="" width={500} height={500}/>
    </Link>
    </div>
    Untitled Paul Game is a simple 2D platformer where you, as Paul, must collect every coin in each level to unlock the goal. Any similarities to existing intellectual property is purely coincidental.
    <br/>
    <br/>
    Made in Unity for Global Game Jam 2024
    <br/>
    <br/>
    I worked as a level designer in this game, and built fun and interesting levels using tools created by the programmers


</Stack>

        <Stack className="pt-2" direction="horizontal" gap={3}>
    <div>
    <Link href="https://aronagox.itch.io/dont-touch-the-red-button"> 
    <Image src="/button.png" alt="" width={500} height={500}/>
    </Link>
    </div>
    Don't Touch the Red Button is a comedy puzzle game where you wander through an environment avoiding deadly moving buttons
    <br/>
    <br/>
    Made in Unity for Abertay Game Development Society Freshers Game Jam 2023
    <br/>
    <br/>
    I worked as a 2D artist and level designer on this game, and made simple but effective art assets in Adobe Illustrator, as well as building challenging levels in engine


</Stack>
    </Stack>
    </>
  );
}
