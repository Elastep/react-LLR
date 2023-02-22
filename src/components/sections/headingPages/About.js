export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon, a small Mediterranean restaurant in the heart of Chicago, has been a staple in the city's food scene for nearly thirty years. It all started back in 1995, when two Italian brothers, Adrian and Mario, decided to open the restaurant.

At the time, Chicago was a diverse city, but Mediterranean cuisine was hard to come by. Adrian and Mario recognized this gap in the market and decided to bring the flavors of their hometown in Italy to the people of Chicago.

Their dedication and hard work paid off, and Little Lemon quickly became a favorite among locals and visitors alike. The restaurant's cozy atmosphere, friendly staff, and delicious food made it a go-to spot for anyone craving Mediterranean flavors.

Over the years, Little Lemon has expanded its menu and its reach, but Adrian and Mario continue to oversee every aspect of the restaurant. They are proud of what they have built and are always looking for ways to improve and innovate.

Despite their success, Adrian and Mario remain humble and grounded, always putting their customers first. For them, Little Lemon is not just a business but a passion that they are grateful to share with the people of Chicago.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}