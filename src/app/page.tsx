import Button from "@/component/Button";
import Link from "next/link";

 function Home() {
 const FirstName = "Sabih";
  return (
  <div className="">
   <Link href="/about" className="text-yellow-300">About</Link>  
   <br />
   <Link href="/contact" >Contact</Link>  
   <div>
    <h1>{FirstName}</h1>
    <Button text="Dowload" />
    <Button text="Dowload for windows" />
   </div>
  </div>
  );
}

export default Home
