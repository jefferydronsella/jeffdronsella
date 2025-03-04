import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="w-[1000px] mx-auto mt-4">
      <Link href="mailto:jefferydronsella@gmail.com"><Image src="/contact-page-1536x533.png" alt="contact information" width={1000} height={347} /></Link>
    
    </main>
  )
}