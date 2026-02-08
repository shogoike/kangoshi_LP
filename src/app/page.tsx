import {
  Header,
  Hero,
  BentoGrid,
  Testimonials,
  ContactForm,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
