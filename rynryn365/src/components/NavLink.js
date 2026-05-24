import Link from "next/link";
import Image from "next/image";

export default function NavLink({ href, children }) {
  return (
    <div className= "flex flex-row items-center justify-end group">
      <div className= "hidden group-hover:block">
        <Image src="/arrow-test-icon.png" alt= "arrow" width={20} height={20} />
      </div>
    <Link
      href={href}
      className="lowercase"
    >
      {children}
    </Link>
    </div>
  );
}
