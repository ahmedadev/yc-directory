import SearchForm from '@/components/SearchForm';

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query; // eslint-disable-line @typescript-eslint/no-unsafe-member-access
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch your startup, <br /> Connect with Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas , Vote on Pitches ,and get Noticed in virtual compitions.
      </p>
      <SearchForm query={query} />
    </section>
  );
}

