import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
  const router = useRouter();

  return (
    <>
      <h1>Portfolio Project Page</h1>
      <h3>{router.query.portfolioId}</h3>
    </>
  );
}
