"use client";

import useHamburger from "@/hooks/useHamburger";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function Sidebar() {
  const pathName = usePathname();

  const { isHamburger } = useHamburger();
  return (
    <aside
      className={`hidden   md:w-[20%] ${
        isHamburger || "md:w-[4%]"
      } md:h-[91vh]`}
    >
      {/* openning time sidebar */}
      <ul className={`sidebarul ${isHamburger || "hidden"}`}>
        <li className="py-2 px-4 bg-secondaryBg mt-2">
          <Link href="/" className="flex items-center gap-4">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM8.2501 17.9998C8.2501 17.5856 8.58589 17.2498 9.0001 17.2498H15.0001C15.4143 17.2498 15.7501 17.5856 15.7501 17.9998C15.7501 18.414 15.4143 18.7498 15.0001 18.7498H9.0001C8.58589 18.7498 8.2501 18.414 8.2501 17.9998Z"
                className="fill-black dark:fill-secondaryBgWhite"
              />
            </svg>
            Home
          </Link>
        </li>

        <li className="py-2 px-4 mt-2">
          <Link href="/codingshamim" className="flex items-center gap-4">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={12}
                cy={6}
                r={4}
                className="stroke-black dark:stroke-white"
                strokeWidth="1.5"
              />
              <path
                d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                className="stroke-black dark:stroke-white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            You
          </Link>
        </li>
      </ul>
      {/* closing time sidebar */}
      <ul className={`sidebarul ${isHamburger && "hidden"}`}>
        <li className="py-2 px-4 bg-secondaryBg mt-2">
          <Link href="/" className="flex flex-col items-center gap-2 text-xs">
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM8.2501 17.9998C8.2501 17.5856 8.58589 17.2498 9.0001 17.2498H15.0001C15.4143 17.2498 15.7501 17.5856 15.7501 17.9998C15.7501 18.414 15.4143 18.7498 15.0001 18.7498H9.0001C8.58589 18.7498 8.2501 18.414 8.2501 17.9998Z"
                className="fill-black dark:fill-secondaryBgWhite"
              />
            </svg>
            Home
          </Link>
        </li>

        <li className="py-2 px-4 mt-2">
          <Link href="/me" className="flex flex-col items-center gap-2">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={12}
                cy={6}
                r={4}
                className="stroke-black dark:stroke-white"
                strokeWidth="1.5"
              />
              <path
                d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                className="stroke-black dark:stroke-white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            You
          </Link>
        </li>
      </ul>
    </aside>
  );
}
