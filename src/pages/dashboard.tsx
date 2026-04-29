import Header from "../components/header";

import { SummaryItems } from "../components/summary-items";

const Dashboard = () => {
  return (
    <section className="w-full space-y-6 px-8 pt-14">
      <Header title="Início" subtitle="Início" />
      <SummaryItems />
    </section>
  );
};

export default Dashboard;
