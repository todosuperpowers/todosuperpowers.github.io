import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen min-w-fit flex flex-col justify-center sm:items-center sm:text-center gap-5 sm:gap-10 p-10 sm:-mt-10">
      <Image
        className="dark:invert"
        src="/undraw_to_do_list_re_9nt7.svg"
        alt="Next.js Logo"
        width={375}
        height={207}
        priority
      />
      <h1 className="mt-10 font-bold text-3xl text-gray-800">To Do <span className="bg-gradient-to-br from-blue-800 to-blue-400 inline-block text-transparent bg-clip-text">Superpowers</span></h1>
      <p className="text-2xl text-gray-700">Add essential features to Microsoft To Do, like Backup and Restore.</p>
      <p className="mt-5 text-gray-600">Launching soon.</p>
    </main>
  );
}
