import Link from "next/link";

const Sidebar = () => {

  return (
    <div className="flex">
      <div className={`bg-gray-800 text-white 
                    h-screen w-64
        }`}>
        <h1>Sidebar</h1>
        <ol className={`flex flex-col gap-4`}>
          <Link href="/">Home</Link>
          <Link href="/about">О моих животных</Link>
          <Link href="/about/dogs">Собаки</Link>
          <Link href="/about/cats">Кошки</Link>
          <a target="blank" href="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating">Docs</a>
        </ol>

      </div>

    </div>
  );
};

export default Sidebar;