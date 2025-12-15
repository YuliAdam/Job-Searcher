import { getAllJob } from '@api/apiRequests';

export default async function CardListWrapper() {
  const response = getAllJob()

  return <div>{response ? response : 'undef'}</div>;
}
