//dynamic pages would not be pre-rendered during build time, but will be generated on the server for every incoming request unless explictly declared in the getStaticPaths function.

import path from 'path';
import fs from 'fs/promises';

export default function ProductDetailPage(props) {
  const { title, description } = props.product;

  if (!title) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: false, // false: 404 if the page is not found, true: generate the page on the server if it's not found
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product: product,
    },
  };
}
