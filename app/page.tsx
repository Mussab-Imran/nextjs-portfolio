import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px10 px-5">
      {/* Justify-centre: center it vertically, items-centre: center it horizontally
          flex-col: switch orientation, overflow-hidden: to hide the scrollbars */}
      <div className="max-w-7xl w-full">
        <h1>Hello Portfolio!</h1>
      </div>
    </main>
  );
}
