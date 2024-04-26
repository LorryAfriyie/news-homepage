export const Headline = () => {
  const data = headlineData[0];
  return (
    <section className="headline">
      <div className="img" />
      <div className="grid">
        <div className="col">
          <h1>{data.heading}</h1>
        </div>
        <div className="col">
          <p>{data.post}</p>
        </div>
      </div>
    </section>
  );
};

const headlineData = [
  {
    id: 1,
    heading: "The Bright Future of Web 3.0?",
    post: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  },
];
