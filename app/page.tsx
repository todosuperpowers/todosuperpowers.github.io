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
      <h1 className="mt-10 font-bold text-3xl text-gray-800">
        To Do{" "}
        <span className="bg-gradient-to-br from-blue-800 to-blue-400 inline-block text-transparent bg-clip-text">
          Superpowers
        </span>
      </h1>
      <p className="text-2xl text-gray-700">
        Add essential features to Microsoft To Do, like Backup and Restore.
      </p>
      <form
        className="mt-10 max-w-md flex flex-wrap gap-2 justify-center"
        method="post"
        action="https://todosuperpowers.us21.list-manage.com/subscribe/post?u=ff7d31b617f0b5d21efa14b41&amp;id=ee1fff1bcd&amp;f_id=0006b7e1f0"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
      >
        <label htmlFor="EMAIL">Sign Up for Launch Notification</label>
        <input
          type="email"
          placeholder="you@email.com"
          name="EMAIL"
          className="rounded"
          id="mce-EMAIL"
          required={true}
        />
        <button
          type="submit"
          className="rounded bg-blue-500 hover:bg-blue-400 active:ring-2 active:ring-blue-800 text-white font-semibold py-2 px-4"
        >
          Notify Me
        </button>
      </form>
    </main>
  );
}
