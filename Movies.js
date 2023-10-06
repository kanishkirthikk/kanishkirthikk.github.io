function Movies(props){
 let title=props.names.title;
 let year=props.names.year;
 let rat=props.rating;
 return(
    <>
    <h1>{title}</h1>
    <h1>{year}</h1>
    <h1>{rat}</h1>
    </>
 )
}
Movies.defaultProps = {
   "rating":"not rated",
  };
export default Movies;