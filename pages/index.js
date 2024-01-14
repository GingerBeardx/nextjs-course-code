import path from 'path';
import fs from 'fs/promises';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// executes before the component function runs and populates the data
// this function executes when the application is built, not necessarily
// on the server when the page is requested
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // only generate refreshed data every 10 seconds, if less than 10 seconds, then the cached data will be used. During development, the page will be regenerated on every request
  }; // will be passed to the page component as props
}

export default HomePage;
