import Image from "next/image";
import Link from "next/link";

import {Stack} from "react-bootstrap"
export default function Home() {
  return (
    <>
    <header>
    <h1>
        Contact
    </h1>
    </header>
    
    <Stack direction="vertical" gap={3}>
    <Stack direction="horizontal" gap={3}>
    <div>
    <Link href="mailto:aaronlimjj@gmail.com"> 
    <Image src="/google.webp" alt="" width={50} height={50}/>
    </Link>
    </div>
    <div>
    Email: aaronlimjj@gmail.com
    </div>
    </Stack>

    <Stack direction="horizontal" gap={3}>
    <div>
    <Link href="https://itch.io/profile/aronagox" >
    <Image src="/itch.png" alt="" width={50} height={50}/>
    </Link>
    </div>
    <div>
    Itch.io: Aronagox

    </div>
    </Stack>

        <Stack direction="horizontal" gap={3}>

    <div>
    <Link href="https://www.linkedin.com/in/aaron-lim-571770176">
    <Image src="/linkedin.webp" alt="" width={50} height={50}/>
    </Link>
    </div>
    <div>
    Linkedin: Aaron Lim

    </div>
        </Stack>
                <Stack direction="horizontal" gap={3}>

    <div>
    <Link href="https://github.com/Aronagox">
    <Image src="/github-logo.png" alt="" width={50} height={50}/>
    </Link>
    </div>
    <div>
    Github: Aronagox

    </div>
            </Stack>

    </Stack>
    </>
  );
}
