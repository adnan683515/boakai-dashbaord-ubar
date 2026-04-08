import DashboardHeading from "../../components/DashboardHeading";
import { useDashboardTitle } from "../../Config/sendLocation";
import RiderMannagement from "./RiderMannagement";

export default function Rider() {

  const { title, subtitle } = useDashboardTitle();



  return (
    <div>
      <DashboardHeading title={title} subtitle={subtitle}></DashboardHeading>


      <div>
        <RiderMannagement></RiderMannagement>
      </div>
    </div>
  )
}
