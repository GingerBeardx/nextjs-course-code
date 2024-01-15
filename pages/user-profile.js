export default function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export async function getServerSideProps(context) {
  // req and res are Node.js specific that have a lot of information
  //about the request and response including the headers, cookies, etc.
  const { params, req, res } = context;

  return {
    props: {
      username: 'Eric',
      //No need for revalidate here, because this is server side rendering,
      //so the data is always fresh
    },
  };
}
