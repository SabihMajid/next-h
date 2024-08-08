import Link from "next/link"

function page ()  {
  return (
    <div>
        <div>
        <Link href="/" >Home</Link>  
        <br />
        <Link href="/about" >About</Link>  
        </div>
        <h2 className="contact-head">Hello Contact</h2>
        <h3>Contact Me</h3>
    </div>
  )
}

export default page