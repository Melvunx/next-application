import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div>Melvunx The GOAT</div>
      <div className="flex justify-center gap-4">
        <Link href="https://mail.google.com/mail/u/2/#inbox">Gmail</Link>
        <Link href="https://www.linkedin.com/feed/">LinkedIn</Link>
      </div>
    </footer>
  );
}
