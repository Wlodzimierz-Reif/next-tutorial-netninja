// the name in [] allows next to match any name in the route ie. ninjas/1, ninjas/911
// thats why it's in the /ninjas folder
// when we combine it with <Link href={/ninjas/<id>} /> we can navigte throough the page


// allows to fetch all [id] and based on those it will generate all routes and pages in build time
// don't forget the export
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    // it needs to be a string
    return { params: { id: ninja.id.toString() } };
  });
  return {
    paths,
    // needed for gallback pages to show 404 page if user tries to access url that doesn't exist
    fallback: false,
  };
};

// next will run this for every path(returned from getStaticPaths)
// don't forget the export
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
