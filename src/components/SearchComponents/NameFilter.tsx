import { useState } from "react";
import SubmitText from "./SubmitText";

interface NamedItem {
    name: string;
    index: string;
}

interface NameFilterProps<T extends NamedItem> {
    dataList: T[];
    returnFilteredData: React.Dispatch<React.SetStateAction<T[]>>;
}

function NameFilter<T extends NamedItem>(props: NameFilterProps<T>) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    
    const handleFilter = () => {
        // Filter logic
        const filtered = props.dataList.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        // setFilteredData(filtered);
        props.returnFilteredData(filtered);
    };
    
    const onClickSearch = () => {
        setSearchTerm(searchTerm);
        handleFilter();
    }

    return <>
        <div id="find-field">
            <SubmitText buttonLabel="Search Name" inputValue={searchTerm} onClickMethod={onClickSearch} onChangeMethod={handleInputChange}/>
        </div>
    </>
}
export default NameFilter;