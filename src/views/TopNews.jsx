import img1 from "/images/image-retro-pcs.jpg";
import img2 from "/images/image-top-laptops.jpg";
import img3 from "/images/image-gaming-growth.jpg";

export const TopNews = () => {
  return (
    <section className="top-news">
      <div className="top-news-grid">
        {topNewsData.map((x) => {
          return (
            <div key={x.id} className="info-grid">
              <div className="picture">
                <img src={x.img} alt={x.img} />
              </div>

              <div className="news-details">
                <h1>0{x.id}</h1>
                <h4 className="title">{x.title}</h4>
                <p className="post">{x.post}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const topNewsData = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    post: "What happens when old PCs are given modern upgrades?",
    img: img1,
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    post: "Our best picks for various needs and budgets.",
    img: img2,
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    post: "How the pandemic has sparked fresh opportunities.",
    img: img3,
  },
];
