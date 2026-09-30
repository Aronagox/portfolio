import Image from "next/image";
import {Stack} from "react-bootstrap"

export default function Home() {
  return (
    <>
    <Stack className="p-3" direction="horizontal" gap={3}> 
    <div>
    <Image src="/profile.jpg" alt="The author's profile picture" width={100} height={100} style={{borderRadius:"50%"}} />
    </div>
    <div>
    <h1>
        Aaron Lim
    </h1>
    <h2>
        Games and Web Developer
    </h2>
    </div>
    </Stack>
    <br/>
    
    <div className="p-3">
    <h3>
    About Me
    </h3>
    <p>
    An award winning games developer from Abertay University studying Computer Games Applications Development
    <br/>
    with multiple completed projects, spanning both coursework and external projects. Skilled in Unity and Unreal Engine 5, with experience with PS5 Development Kits.
    <br/>
    Equipped with tech industry and web development experience from internship placement. Experienced in Full Stack Development with Typescript.
    <br/>
    Self taught and worked on projects in React.js, Node.js involving libraries such as Tanstack, Express mysql2, React Bootstrap, Zod etc. 
    <br/>
    Eager to learn and enthusiastic to engage with others, versatile, fast at learning and adaptable.
    </p>
    </div>
    </>
  );
}
