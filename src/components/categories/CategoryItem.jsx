import Link from "next/link";

export default function CategoryItem({ children, link }) {
  return (
    <li className="px-4 w-[60px] h-[35px] flex justify-center items-center rounded-sm dark:bg-white bg-secondaryBgWhite cursor-pointer">
      <Link href={link} className="dark:text-black">
        {children}
      </Link>
    </li>
  );
}
