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
export async function getStaticProps() {
  return {
    props: {
      products: [
        { id: 'p1', title: 'Product 1' },
        { id: 'p2', title: 'Product 2' },
        { id: 'p3', title: 'Product 3' },
      ],
    },
  }; // will be passed to the page component as props
}

export default HomePage;
