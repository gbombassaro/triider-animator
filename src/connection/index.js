const domain = 'http://localhost:3000/';

export const get = (sufix, params) => {
  const url = `${domain}${sufix}`;
  const method = 'GET';
  const headers = {'Content-Type': 'application/json', ...params};
  console.log(headers);
  const options = {method, headers};
  return fetch(url, options)
    .then(payload => {
      return payload.json();
    });
}

// export const edit = (path, param) => {
//   const url = '${domain}users/2'; //PRECISA PASSAR O ID COMO PARAM DA REQUEST
//   const method = 'PUT';
//   const headers = {'Content-Type': 'application/json'};
//   const body = param;
//   const options = {method, headers, body};
//   return fetch(url, options)
//     .then(payload => {
//       if (payload.status) return payload;
//       return payload.json();
//     });
// }

export const send = (sufix, param) => {
  const url = `${domain}${sufix}`;
  const method = 'POST';
  const headers = {'Content-Type': 'application/json'};
  const body = JSON.stringify(param);
  const options = {method, headers, body};
  return fetch(url, options)
    .then(payload => {
      if (payload.status) return payload;
      return payload.json();
    });
}