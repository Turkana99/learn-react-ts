type DataComing = {
  name: string,
  courseNumber:number,
  isBest: boolean
};
function Home(props: DataComing) {
  return <div>
    <p>{props.name}</p>
    <p>Course count: {props.courseNumber}</p>
   {props.isBest ? <p>This is the best React course!</p> : <p>This isn't the best React course!</p>} 
  </div>;
}

export default Home;
