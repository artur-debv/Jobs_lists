import styles from '../css/Header.module.css'

import bg_header_desktop from '../assets/bg-header-desktop.svg'

export function Header(){
    return(
       <img src={bg_header_desktop} className={styles.header_image} alt="" />
    )
}