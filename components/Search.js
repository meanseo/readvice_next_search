import styles from '../styles/Search.module.css'

export function Search(){
    return(
        <>
        <div className= {styles.center}>
        <input></input> <button>텍스트 검색</button> <button>사진 검색</button>
        </div>
        <p><img src="http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg" align="middle"/>작별인사</p>
        <p><img src="http://image.kyobobook.co.kr/images/book/large/610/l9788972773610.jpg" align="middle"/>가</p>
        <p><img src="http://image.kyobobook.co.kr/images/book/large/665/l9791166686665.jpg" align="middle"/>나</p>
        </>
    )
}