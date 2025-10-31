import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-around min-h-screen p-8">
      <Link href="/viempage">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            使用 viem 连接钱包的页面
          </button>
      </Link>
      <Link href="/wagmipage">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            使用wagmi连接钱包的页面
          </button>
      </Link>
      <Link href="/rainbowkitpage">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            使用rainbowkit连接钱包的页面
          </button>
      </Link>
    </div>
  );
}
