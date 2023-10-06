
export default function Dates(){
const d=new Date();
return(<h1>{d.getMonth()+1+'-'+d.getDate()+'-'+d.getFullYear()}</h1>);
}