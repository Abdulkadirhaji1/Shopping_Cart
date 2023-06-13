import {useState} from 'react';

function SearchBar() {

    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value)

        // if (event.target.id === 'field1') {
        //     console.log('do the extra thing')
        // }

        // if (event.target.value === 'ashwin') {
        //     setSearch('Ashwin')
        // }
    }

    return (
        <div>
            <div>
                <input type="text" id="field1" value={search} onChange={handleChange} />
            </div>

            <div>
                Search Query: {search}
            </div>
        </div>
    )
}

export default SearchBar;