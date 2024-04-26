export const NewNews = () => {
  return (
    <section className="new-news">
      <div className="new-news__topic">
        <h1>New</h1>
        <ul className="new-news__list">
          {newNewsData.map((x) => {
            return (
              <li className="new-news__items" key={x.id}>
                <h2>{x.title}</h2>
                <p>{x.post}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const newNewsData = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    post: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    post: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    post: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
