const Testimonials = () => {
  const { myTestimonials } = {
    myTestimonials: [
      {
        user: "Ali",
        text: "text testimonials",
      },
      {
        user: "Ali",
        text: "text testimonials",
      },
      {
        user: "Ali",
        text: "text testimonials",
      },
    ],
  };

  const renderTestimonials = myTestimonials.map(function (testimonials) {
    return (
      <li key={testimonials.user}>
        <blockquote>
          <p>{testimonials.text}</p>
          <cite>{testimonials.user}</cite>
        </blockquote>
      </li>
    );
  });

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
            <h2>
              Mmmm, a little brag 😊 What people are saying about my last
              portfolio
            </h2>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{renderTestimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
