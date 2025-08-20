import EventActions from "./EventActions";
import Home from "./home";
import Instructor from "./Instructor";
import InstructorList from "./InstructorList";
import LoginCheck from "./LoginCheck";
import ReducerExemple from "./Reducer";
import Request from "./request";
import { ThemeContextProvider } from "./ThemeContextProvider";
import ContextExemple from "./ContectExample";
import RefExemple from "./RefExample";

function RunApp1() {
  const instructor = {
    firstName: "Turkana",
    lastName: "Mammadova",
  };
  const instructorList = [
    {
      firstName: "Turkana",
      lastName: "Mammadova",
    },
    {
      firstName: "Imran",
      lastName: "Ahmadov",
    },
  ];
  return (
    <div>
      <Home name="Turkana Mammadova" courseNumber={10} isBest={true} />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
      <Request status="success" />
      <EventActions />
      <LoginCheck />
      <ReducerExemple />
      <ThemeContextProvider>
        <ContextExemple />
      </ThemeContextProvider>
      <RefExemple/>
    </div>
  );
}

export default RunApp1;
