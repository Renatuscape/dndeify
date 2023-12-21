type CardProps = {
    title?: string;
    contentBox?: boolean;
    headerBox?: boolean;
    children: React.ReactNode;
}

export default function Card(props: CardProps){

    const header = props.headerBox ? <h2 id="card-box">{props.title}</h2> : <h2>{props.title}</h2>;

    return <div className="card">
        {props.title && <>{header}</>}
        {props.contentBox ? <div id="card-box">{props.children}</div> : <>{props.children}</>}
    </div>
}