import {auth, signIn, signOut} from "@/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="header">
      <nav className="flex-between">
        <Link href="/">
          <Image src={"/logo.png"} alt={"logo"} width={144} height={30} />
        </Link>
      </nav>
      <div className="flex items-center gap-5 text-black">
        {session?.user ? (
          <>
            <Link href="/startup/create">
              <span>Create</span>
            </Link>
            <form
              action={async () => {
                "use server";
                await signOut({redirectTo: "/"});
              }}
            >
              <button type="submit">
                <span>Logout</span>
              </button>
            </form>
            <Link href={`/user/${session?.user?.id}`}>
              <span>{session.user.name}</span>
            </Link>
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit">
              <span>Login</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
