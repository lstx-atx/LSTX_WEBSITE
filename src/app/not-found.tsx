import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Nav solid />
      <section className="section" style={{ paddingTop: 160, textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow center">Off The Map</span>
          <h1 className="h1" style={{ marginTop: 18 }}>
            Page Not Found
          </h1>
          <p className="lead" style={{ margin: '18px auto 30px', textAlign: 'center' }}>
            That one is dark. Let us get you back to the work.
          </p>
          <Link className="btn btn--copper btn--lg" href="/">
            Back To Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
