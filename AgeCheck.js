export default function AgeCheck(props){
    if(props.age>=18){
        return(<h1>Adult</h1>);
    }else{
        return(<h1>Minor</h1>);
    }
}