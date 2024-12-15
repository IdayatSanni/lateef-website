import Award from "../components/Award";
import AwardList from "../components/AwardList";
import Hero from "../components/Hero";
import PublicationList from "../components/PublicationList";

export default function Home() {
  return (
    <>
      <Hero />
      <AwardList />
      <h2>Publication List</h2>
      <PublicationList numberOfPublications={4} />
    </>
  );
}
