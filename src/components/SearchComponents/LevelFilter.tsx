import { useState } from "react";
import SubmitNumber from "./SubmitNumber";

interface LevelItem {
    level: number;
    index: string;
}

interface LevelFilterProps<T extends LevelItem> {
    dataList: T[];
    returnFilteredData: React.Dispatch<React.SetStateAction<T[]>>;
}

function LevelFilter<T extends LevelItem>(props: LevelFilterProps<T>) {
    const [searchTerm, setSearchTerm] = useState(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(parseInt(e.target.value));
    };
    
    const handleFilter = () => {
        // Filter logic
        const filtered = props.dataList.filter((item) =>
            item.level === searchTerm
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
            <SubmitNumber buttonLabel="Search Level" inputValue={searchTerm} onClickMethod={onClickSearch} onChangeMethod={handleInputChange}/>
        </div>
    </>
}
export default LevelFilter;