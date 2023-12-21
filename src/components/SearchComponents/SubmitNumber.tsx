interface SubmitNumberProps{
    buttonLabel: string;
    inputValue: number;
    onChangeMethod: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickMethod: () => void;
}
function SubmitNumber({ inputValue, onChangeMethod, onClickMethod, buttonLabel: fieldLabel }: SubmitNumberProps) {
    return <div>
        <input
            type="number" //designates type of input. Also set type in useState
            id="inputValue"
            value={inputValue} //links field to useState and updates value displayed
            onChange={onChangeMethod} />
        <button onClick={onClickMethod}>{fieldLabel}</button>
    </div>
}

export default SubmitNumber;