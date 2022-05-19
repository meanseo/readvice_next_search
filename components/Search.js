import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export function Search(){
    return(
        <>
        <input autoComplete="검색어를 입력하세요"></input>
        <IconButton>
          <SearchIcon />
        </IconButton>
        </>

    )
}