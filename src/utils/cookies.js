import parseJwt from "./parseJwt";

const setCk = function setCookies(
  cName,
  value,
  { datetime, iso8601 },
  secure = false
) {
  const d = new Date();
  if (datetime) d.setTime(datetime);
  if (iso8601) d.setTime(iso8601);
  const cValue = secure ? window.btoa(value) : value;
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cName}=${cValue};${expires};path=/;`;
};

const getCk = function getCookie(cName, secure = false) {
  const name = `${cName}`;
  const cookieAbstrac = document.cookie.split(";");
  for (const element of cookieAbstrac) {
    let cookie = element;
    while (cookie.startsWith(" ")) {
      cookie = cookie.substring(1);
    }
    if (cookie.startsWith(name)) {
      return secure
        ? window.atob(cookie.substring(name.length, cookie.length))
        : cookie.substring(name.length, cookie.length);
    }
  }
};

const delCk = function delCookies(cName) {
  setCk(cName, "", -1);
};

const certDetail = function getCertDetail() {
  const token = getCk("CERT");
  if (token) {
    const { i, u, exp } = parseJwt(token);
    if (u === undefined) delCk("CERT");
    return {
      id: i,
      user: u,
      exp,
    };
  }
  return {
    id: undefined,
    user: undefined,
    exp: undefined,
  };
};

export { setCk, getCk, certDetail, delCk };
