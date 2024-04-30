import { Navbar } from "../components/Navbar";
import { Headline } from "./Headline";
import { NewNews } from "./NewNews";
import { TopNews } from "./TopNews";

export const NewsPage = () => {
  return (
    <main className="news-page-section">
      <Navbar />

      {/* Wrapper for headline and new news component */}
      <div className="wrapper">
        <Headline />
        <NewNews />
      </div>

      <TopNews />
    </main>
  );
};
