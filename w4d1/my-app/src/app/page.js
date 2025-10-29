import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-around min-h-screen p-8">
      {/* <Link href="/test">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to test Page
          </button>
      </Link> */}
      <Link href="/line">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to line chart Page
          </button>
      </Link>
      <Link href="/bar">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to bar chart Page
          </button>
      </Link>
      <Link href="/pie">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to pie chart Page
          </button>
      </Link>
      <Link href="/kline">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to K-line chart Page
          </button>
      </Link>
    </div>
  );
}
