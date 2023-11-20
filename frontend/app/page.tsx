import Image from "next/image";
import { JoinTheBlog } from "./components/join-the-blog/JoinTheBlog";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-6 items-center ">
      <div className="text-center">Home Page</div>
      <JoinTheBlog />
    </main>
  );
}
