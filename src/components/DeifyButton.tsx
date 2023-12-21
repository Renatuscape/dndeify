type ButtonProps = {
    onClickHandler: () => void;
    children: React.ReactNode;
}

function DeifyButton(props: ButtonProps){
    return <>
    <button onClick={props.onClickHandler}>{props.children}</button>
    </>
}

export default DeifyButton;