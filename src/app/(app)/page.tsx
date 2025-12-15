import { PATHS } from '@config/navigationConfig';
import { redirect } from 'next/navigation';

export default function RedirectPage() {
  redirect(PATHS.firstPage);
}
