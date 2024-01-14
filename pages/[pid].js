import path from 'path';
import fs from 'fs/promises';

export default function ProductDetailPage(props) {
  const { title, description } = props.product;

  if (!title) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
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
