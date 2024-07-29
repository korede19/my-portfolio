import styles from "../app/page.module.css";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ContactIcon = () => {
  const pathname = usePathname();
  return (
    <Link href="./contact" passHref>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.33333 0H22.6667C23.4 0 24 0.675 24 1.5V22.5C24 23.325 23.4 24 22.6667 24H1.33333C0.6 24 0 23.325 0 22.5V1.5C0 0.675 0.6 0 1.33333 0ZM21.3333 21V7.5H2.66667V21H21.3333ZM4 9V10.5H8V9H4ZM9.33333 9V13.5H20V9H9.33333ZM4 15V16.5H8V15H4ZM9.33333 15V19.5H20V15H9.33333Z"
          fill="#4B4B74"
          fill-opacity="0.5"
          cursor="pointer"
          // className={styles.iconHover}
          className={classNames({
            [styles.active]: pathname === "/contact",
          })}
        />
      </svg>
    </Link>
  );
};

export default ContactIcon;
