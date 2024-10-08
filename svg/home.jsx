import styles from "../app/page.module.css";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HomeIcon = () => {
  const pathname = usePathname();
  return (
    <Link href="/">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.38843 22.559V15.3539H14.6058V22.559C14.6058 23.3515 15.1927 24 15.9101 24H19.8231C20.5405 24 21.1275 23.3515 21.1275 22.559V12.4719H23.3448C23.9448 12.4719 24.2318 11.6506 23.7753 11.2183L12.871 0.367457C12.3754 -0.122486 11.6188 -0.122486 11.1232 0.367457L0.218936 11.2183C-0.224539 11.6506 0.0493717 12.4719 0.649367 12.4719H2.86674V22.559C2.86674 23.3515 3.45369 24 4.17108 24H8.08409C8.80148 24 9.38843 23.3515 9.38843 22.559Z"
          fill="#4B4B74"
          fillOpacity="1"
          cursor="pointer"
          // class={styles.iconHover}
          className={classNames({ [styles.active]: pathname === "/" })}
        />
      </svg>
    </Link>
  );
};

export default HomeIcon;
