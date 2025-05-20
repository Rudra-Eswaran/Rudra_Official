import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

const Section = ({ id, title, children }) => (
  <section id={id} className="min-h-screen p-8 border-b border-gray-300 scroll-mt-16">
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    {children}
  </section>
);

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Section id="home" title="Home">
          <p>Welcome to the Home section.</p>
        </Section>

        <Section id="about" title="About">
          <p>About content here...</p>
        </Section>

        <Section id="team" title="Team">
          <p>Team members listed here...</p>
        </Section>

        <Section id="services" title="Services">
          <p>Services description...</p>
        </Section>

        <Section id="projects" title="Projects">
          <p>Projects showcase...</p>
        </Section>

        <Section id="certifications" title="Certifications">
          <p>Certifications info...</p>
        </Section>

        <Section id="contact" title="Contact">
          <p>Contact form or details here...</p>
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default App;
