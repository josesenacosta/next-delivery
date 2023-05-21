import { useState } from 'react'
import styles from './SearchInpunt.module.css'
import SearchIcon from './searchicon.svg'
import { useAppContext } from '@/contexts/AppContext';

type Props = {
  onSearch: (searchValue: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {

  const { tenant } = useAppContext()

  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      onSearch(searchValue)
      setSearchValue('')
    }
  }

  return (
    <div className={styles.container}
      style={{ borderColor: focused ? tenant?.mainColor : '#ffffff', transition: '500ms' }}>
      <div
        className={styles.button}
        onClick={() => (onSearch(searchValue), setSearchValue(''))}
      >
        <SearchIcon color={tenant?.mainColor} />
      </div>

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
