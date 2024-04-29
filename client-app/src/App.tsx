import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5007/api/activities").then((response) => {
      setActivities(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Reactivities</h1>
      <ul>
        {activities.map((activity: any) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
