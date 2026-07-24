import ContactMe from "../components/contactMe";

export async function generateMetadata() {
  return {
    title: "Contact",
    description:
      "Get in touch with Ololade — open to fresh challenges, creative collaborations, and product design opportunities.",
  };
}

export default function ContactPage() {
  return <ContactMe />;
}
