import { useRouter } from 'next/router';

export default function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The specific project of a given client</h1>
    </div>
  );
}
