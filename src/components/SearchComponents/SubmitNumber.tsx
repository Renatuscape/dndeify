interface SubmitNumberProps{
    buttonLabel: string;
    inputValue: number;
    minValue?: number;
    maxValue?: number;
    onChangeMethod: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickMethod: () => void;
}
function SubmitNumber({ minValue, maxValue, inputValue, onChangeMethod, onClickMethod, buttonLabel: fieldLabel }: SubmitNumberProps) {
    return <div className="finderbox-element">
        <input className="finderbox-input"
            type="number" //designates type of input. Also set type in useState
            id="inputValue"
            value={inputValue} //links field to useState and updates value displayed
            onChange={onChangeMethod}
            {...(minValue !== undefined && { min: minValue })}
            {...(maxValue !== undefined && { max: maxValue })}
        />
        <button className="finderbox-button" onClick={onClickMethod}>{fieldLabel}</button>
    </div>
}

export default SubmitNumber;