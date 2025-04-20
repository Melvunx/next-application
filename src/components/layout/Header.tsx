import { User } from "next-auth";

export function Header({ user }: { user: User }) {
  return (
    <nav className="flex w-full">
      <div className="flex-1">
        <p>Melvunx Application</p>
      </div>
      <div className="flex items-center justify-between w-1/4">
        <p>{user.name}</p>
      </div>
    </nav>
  );
}
