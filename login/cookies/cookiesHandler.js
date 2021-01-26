import Cookies from './js-cookie';

export function setCookies(name, value) {
  Cookies.set(name, value);
}

export function getCookies(name) {
  return Cookies.get(name);
}

export function deleteCookies(name) {
  Cookies.remove(name);
}