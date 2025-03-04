import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex justify-center">
        <div className="">
          <h2 className="text-4xl mt-4 text-center">Programmer, Musician, Family Man</h2>
          <Image src="/Jeffery.jpg" alt="A picture of Jeffery" width="600" height="600" className="mx-auto mt-4"/>
        </div>
      </main>
    </div>
  );
}
