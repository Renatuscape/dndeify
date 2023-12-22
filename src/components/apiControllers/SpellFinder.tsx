import { useEffect, useState } from "react";
import NameFilter from "../SearchComponents/NameFilter";
import LevelFilter from "../SearchComponents/LevelFilter";

interface Spell {
    isFavourite: boolean;
    index: string;
    name: string;
    level: number;
}

function SpellFinder() {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [favSpells, setFavSpells] = useState<Spell[]>([]);
    const [showFavList, setShowFavList] = useState(false);
    const [filteredSpells, setFilteredSpells] = useState<Spell[]>([]);

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

    const setFavSpell = (spell: Spell) => {
        if (spell.isFavourite) {
            spell.isFavourite = false;
            setFavSpells(favSpells.filter(spell => spell !== spell))
        }
        else {
            spell.isFavourite = true;
            setFavSpells([...favSpells, spell]);
        }

    }

    function FavouriteSpells() {
        return <div className="resultbox">
            {spells.filter((s) => s.isFavourite === true).map((dataEntry, index) => (
                <p className="resultbox-element" key={dataEntry.index + index}><button className="data-entry-button">{dataEntry.name} (lv{dataEntry.level})</button> <button onClick={() => setFavSpell(dataEntry)}>{dataEntry.isFavourite ? "Unfavourite" : "Favourite"}</button></p>
            ))}
        </div>
    }

    return <div className="spell-finder">
        <div className="finderbox">
            <button className="finderbox-element" onClick={() => setShowFavList(!showFavList)}>{showFavList ? "Show Search" : "Show Favourites"}</button>
            {showFavList ? <FavouriteSpells /> :
                <>
                    <NameFilter returnFilteredData={setFilteredSpells} dataList={spells} />
                    <LevelFilter minValue={0} maxValue={9} returnFilteredData={setFilteredSpells} dataList={spells} />
                </>}
        </div>

        {!showFavList &&
            <div className="resultbox">{filteredSpells.map((dataEntry, index) => (
                <p className="resultbox-element" key={dataEntry.index + index}>{dataEntry.name} (lv{dataEntry.level})
                    <button onClick={() => setFavSpell(dataEntry)}>{dataEntry.isFavourite ? "Unfavourite" : "Favourite"}</button>
                </p>
            ))}
                {filteredSpells.length < 1 && <p>No result.</p>}</div>}
    </div>
}

export default SpellFinder;