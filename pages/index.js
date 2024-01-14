import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>
          <Link href={`${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// executes before the component function runs and populates the data
// this function executes when the application is built, not necessarily
// on the server when the page is requested
export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // only generate refreshed data every 10 seconds, if less than 10 seconds, then the cached data will be used. During development, the page will be regenerated on every request
  }; // will be passed to the page component as props
}

export default HomePage;
