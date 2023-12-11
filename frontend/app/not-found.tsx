import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-y-9  ">
      <h2 className="  text-pink-700 text-3xl  font-extrabold ">NOT FOUND</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className=" border-pink-700  border-dotted border-2 p-5 rounded-full "
      >
        Return Home
      </Link>
    </div>
  );
}
