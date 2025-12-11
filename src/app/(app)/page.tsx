'use client';
import { PATHS } from '@config/navigationConfig';
import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';
import { pageSelector } from 'store/selectors';

export default function Page() {
  const page = useSelector(pageSelector);
  redirect(PATHS.empty.concat(page.toString()));
}
