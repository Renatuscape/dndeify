interface ControlledTextFieldProps {
    buttonLabel: string;
    inputValue: string;
    onChangeMethod: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickMethod: () => void;
}

function ControlledTextField({ inputValue, onChangeMethod, onClickMethod, buttonLabel: fieldLabel }: ControlledTextFieldProps) {
    return <div className="finderbox-element">
        <input className="finderbox-input"
            type="text" //designates type of input. Also set type in useState
            id="inputValue"
            value={inputValue} //links field to useState and updates value displayed
            onChange={onChangeMethod}
            placeholder="Find all" />
        <button className="finderbox-button" onClick={onClickMethod}>{fieldLabel}</button>
    </div>
}

export default ControlledTextField;