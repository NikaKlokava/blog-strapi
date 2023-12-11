import Link from "next/link";
import { headers } from "next/headers";
import { getPosts } from "@/app/utils/utils";

export default async function NotFound() {


  //   const data: PostsData = await getPosts();
  return (
    <div>
      {/* <h2>Not Found: {data}</h2> */}
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  );
}
