import DashboardHeading from "../../components/DashboardHeading";
import { useDashboardTitle } from "../../Config/sendLocation";

export default function Documents() {

  const { title, subtitle } = useDashboardTitle();


  return (
    <div>

      <DashboardHeading title={title} subtitle={subtitle}></DashboardHeading>


    </div>
  )
}
