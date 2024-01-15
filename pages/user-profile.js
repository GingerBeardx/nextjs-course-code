export default function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: 'Eric',
      //No need for revalidate here, because this is server side rendering, so the data is always fresh
    },
  };
}
