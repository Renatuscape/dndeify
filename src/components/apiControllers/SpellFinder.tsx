import { useEffect, useState } from "react";
import NameFilter from "../SearchComponents/NameFilter";
import LevelFilter from "../SearchComponents/LevelFilter";

interface Spell {
    index: string;
    name: string;
    level: number;
}

function SpellFinder() {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [filteredSpells, setFilteredSpells] = useState<Spell[]>([]);
    const [filterOnLevel, setFilterOnLevel] = useState(false);

    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/spells/")
        .then((res) => res.json())
        .then(async (data) => {
            const spellDetailsPromises = data.results.map((result: any) =>
                fetch(`https://www.dnd5eapi.co${result.url}`).then((res) => res.json())
            );

            const spellDetails = await Promise.all(spellDetailsPromises);
            const spellsWithDetails = spellDetails.map((detail: any, index: number) => ({
                ...data.results[index],
                level: detail.level,
            }));

            setSpells(spellsWithDetails);
            setFilteredSpells(spellsWithDetails);
        });
    }, []);

    return <div className="spell-finder">
        <NameFilter returnFilteredData={setFilteredSpells} dataList={spells} />
        <LevelFilter returnFilteredData={setFilteredSpells} dataList={spells}/>

        {filteredSpells.map((dataEntry, index) => (
            <p key={dataEntry.index + index}>{dataEntry.name} (lv{dataEntry.level})</p>
        ))}

        {filteredSpells.length < 1 && <p>No result.</p>}
    </div>
}

export default SpellFinder;