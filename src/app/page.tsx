import Link from "next/link";


export default function Home() {
  return (
     <div className="bg-black bk">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Nayeb&apos;s Computer <br />Reapair Shop 
          </h1>
          <address>
            Boro Mukam Masjid<br />
            Golapganj,Sylhet 
          </address>
          <p>
            <Link href="tel:5555555" className="hover:underline">5555555</Link> 
          </p>
        </div>
      </main>
     </div>
   
  );
}
