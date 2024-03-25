// import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {locales, localePrefix} from './config';

// export const {Link, redirect, usePathname, useRouter} =
//   createLocalizedPathnamesNavigation({
//     locales,
//     pathnames,
//     localePrefix
//   });

import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});