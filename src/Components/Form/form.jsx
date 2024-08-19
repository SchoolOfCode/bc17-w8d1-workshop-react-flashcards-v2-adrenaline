import styles from "./form.module.css"

export default function Form() {

    return (
        <>
           <form className={styles.Form}>
        <div className="input-group">
          <label htmlFor="name">Question:</label>
          <input type="text" id="name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Answer:</label>
          <input type="email" id="email" />
        </div>
        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
                        </>
                        )
}