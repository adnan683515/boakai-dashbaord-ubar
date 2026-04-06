import { useDashboardTitle } from "../../Config/sendLocation";

export default function Dashboard() {
      const { title, subtitle } = useDashboardTitle();


  return (
    <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
  )
}
