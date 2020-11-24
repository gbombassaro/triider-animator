export const get = (sufix) => {
  const url = `http://localhost:3000/${sufix}`;
  const method = 'GET';
  const headers = {'Content-Type': 'application/json'};
  const options = {method, headers};
  return fetch(url, options)
    .then(payload => {
      return payload.json();
    });
}

export const edit = (path, param) => {
  const url = 'http://localhost:3000/users/2'; //PRECISA PASSAR O ID COMO PARAM DA REQUEST
  const method = 'PUT';
  const headers = {'Content-Type': 'application/json'};
  const body = param;
  const options = {method, headers, body};
  return fetch(url, options)
    .then(payload => {
      if (payload.status) return payload;
      return payload.json();
    });
}

export const send = (path, param) => {
  const url = 'http://localhost:3000/users/2';
  const method = 'POST';
  const headers = {'Content-Type': 'application/json'};
  const body = param;
  const options = {method, headers, body};
  return fetch(url, options)
    .then(payload => {
      if (payload.status) return payload;
      return payload.json();
    });
}