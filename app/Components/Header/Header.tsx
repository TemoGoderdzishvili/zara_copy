import styles from "./Header.module.css"
import Logo from "../Images/Zara_Logo.svg.png"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.upper}>
                <Link href={'/login'} className={styles.link}>LOG IN</Link>
                <Link href={'/help'} className={styles.link}>HELP</Link>
            </div>
            <div className={styles.lower}>
                <Image src={Logo} alt="zara logo" style={{height: "150px", width: "400px"}}/>
                <input type="text" placeholder="Search..." className={styles.input}/>
            </div>
        </div>
    )
}
export default Header