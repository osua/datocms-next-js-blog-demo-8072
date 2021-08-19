///        <a         ----------------------Line 9
///          href="https://nextjs.org/" -----Line 10
///          className="underline hover:text-success duration-200 transition-colors" -----Line 11
///        > -----Line 12
///          Next.js -----Line 13
///        </a> -----Line 14
export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        //Off to NYC.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        An online Traveler's Toolkit, a Swiss Army Knife, for your inner voyager{' '}
        .
      </h4>
    </section>
  );
}
