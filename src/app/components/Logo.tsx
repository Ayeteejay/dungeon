interface Content{
    classes?: string;
    span_classes?: string;
}
export default function Logo({content}: {content:Content}){
    const {classes, span_classes} = content;
    return (
        <h1 className={`flex text-black dungeon ${classes}`}>Dungeon<span className={`mt-2 ${span_classes}`}>&#8482;</span></h1>    
    )
}