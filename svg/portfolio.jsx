import styles from "../app/page.module.css";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

const PortfolioIcon = () => {
  const pathname = usePathname();
  return (
    <Link href="/portfolio">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 14.4H1.2V21.6C1.2 22.2365 1.45286 22.847 1.90294 23.2971C2.35303 23.7471 2.96348 24 3.6 24H20.4C21.0365 24 21.647 23.7471 22.0971 23.2971C22.5471 22.847 22.8 22.2365 22.8 21.6V14.4H13.2V16.8H10.8V14.4ZM10.8 13.2H0V6C0 4.68 1.08 3.6 2.4 3.6H7.2V2.4C7.2 1.76348 7.45286 1.15303 7.90294 0.702944C8.35303 0.252856 8.96348 0 9.6 0L14.4 0C15.0365 0 15.647 0.252856 16.0971 0.702944C16.5471 1.15303 16.8 1.76348 16.8 2.4V3.6H21.6C22.2365 3.6 22.847 3.85286 23.2971 4.30294C23.7471 4.75303 24 5.36348 24 6V13.2H13.2V10.8H10.8V13.2ZM14.4 3.6V2.4H9.6V3.6H14.4Z"
          fill="#4B4B74"
          fillOpacity="1"
          cursor="pointer"
          // className={styles.iconHover}
          className={classNames({ [styles.active]: pathname === "/portfolio" })}
        />
      </svg>
    </Link>
  );
};

export default PortfolioIcon;
