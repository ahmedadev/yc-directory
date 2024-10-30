import SearchForm from "@/components/SearchForm";
import StartupCard from '@/components/StartupCard';
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query; 
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1,name:"Adrian" },
    _id: 1,
    discription: "This is a discription",
    image: "https://cdn.pixabay.com/photo/2022/02/12/06/50/man-7008560_1280.jpg",
    category: "Robots",
    title: "We Robots"
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas , Vote on Pitches ,and get Noticed in virtual compitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for  "${query}"` : "All startups"}
        </p>
        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? posts.map((post: StartupCardType, index: number) => (<StartupCard key={post?._id} post={post}/>)) : (<p className='no-result'>no result found</p>)}
        </ul>
      </section>
    </>
  );
}