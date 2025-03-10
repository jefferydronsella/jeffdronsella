import Image from "next/image";

export default function About() {
  return (
    <main className="w-[1000px] mx-auto">
      <h2 className="text-2xl mt-4 px-2">Jeff Dronsella is a full time family man who programs by day and does music when he can.  Jeff lives in Kingston Springs, TN and enjoys camping and kayaking with his family.</h2>
      <Image src="/photos/family.jpg" alt="picture of Jeff with his family" width={1000} height={735} className="mx-auto my-4"/>
    </main>
  )
}