//dynamic pages would not be pre-rendered during build time, but will
//be generated on the server for every incoming request unless
//explictly declared in the getStaticPaths function.

import path from 'path';
import fs from 'fs/promises';

export default function ProductDetailPage(props) {
  if (!props.product) {
    return <p>Loading...</p>;
  }

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

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData);
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: false, // false: 404 if the page is not found, true: generate the page on the server if it's not found
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();

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
