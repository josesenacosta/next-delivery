import { useState } from 'react'
import styles from './SearchInpunt.module.css'

type Props = {
  mainColor: string;
  onSearch: (searchValue: string) => void;
}

const SearchInput = ({ mainColor, onSearch }: Props) => {

  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      onSearch(searchValue)
    }
  }

  return (
    <div className={styles.container}
      style={{ borderColor: focused ? mainColor : '#ffffff', transition: '500ms' }}>
      <div
        className={styles.button}
        onClick={() => onSearch(searchValue)}
      ></div>
      <input type='text'
        className={styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder='Digite o que procura'
        value={searchValue}
        onKeyUp={handleKeyUp}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
