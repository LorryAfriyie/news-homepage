import { Navbar } from "../components/Navbar";
import { Headline } from "./Headline";
import { NewNews } from "./NewNews";

export const NewsPage = () => {
  return (
    <main className="news-page-section">
      <Navbar />

      <div className="wrapper">
        <Headline />
        <NewNews />
      </div>
    </main>
  );
};
