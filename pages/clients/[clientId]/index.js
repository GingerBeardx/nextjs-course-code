import { useRouter } from 'next/router';

export default function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: '/clients/[clientId]/[clientProjectId]',
      query: { clientId: 'max', clientProjectId: 'projecta' },
    });
  }

  return (
    <>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  );
}
