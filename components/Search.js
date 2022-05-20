import styles from '../styles/Search.module.css'

export function Search(){
    return(
        <>
        <div className= {styles.center}>
        <input></input> <button>텍스트 검색</button> <button>사진 검색</button>
        </div>
        <div>
        <image scr="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/picture-512.png"/>
        </div>
        </>
    )
}