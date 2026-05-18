import styles from "./container.module.css"
export default function Container({ children }) {
    return <div className={styles.parentContainer}>{children} </div>
}

// this is not a functional com but a  structural compone as its fun
//  is to only provide structure to our app