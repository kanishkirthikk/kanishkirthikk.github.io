export default function UserProfile(props){
    return(
        <>
        <h1>{props.p.name}</h1>
        <h1>{props.p.age}</h1>
        <h1>{props.p.branch}</h1>
        <h1>{props.p.doc}</h1>
        </>

    );

    
    
}