import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    { clientId: 'max', name: 'Maximilian' },
    { clientId: 'manu', name: 'Manuel' },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.clientId}>
            <Link
              href={{
                pathname: '/clients/[clientId]',
                query: { clientId: client.clientId },
              }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
