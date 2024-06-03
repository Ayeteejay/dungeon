import Link from "next/link"
interface ButtonContent{
    href:string;
    target:string;
    classes:string;
    title:string;
}
export default function PrimaryButton({content}:{content:ButtonContent}){
    const {href, target, classes, title} = content;
    return (
        <Link href={href} target={target} className={`border border-black px-6 py-2 rounded-full transition-all duration-300 ${classes}`}>{title}</Link>
    )
}