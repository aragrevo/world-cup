// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const myHeaders = new Headers();
myHeaders.append(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyMjRjMGZkOWFhYzIyNjcwMDdmMDEiLCJpYXQiOjE2Njg0MjQ4OTYsImV4cCI6MTY2ODUxMTI5Nn0.h4OWb789ZPPSBep86x2YRuvUrsKeb7VIYtIYRgWKITM',
);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export default async function handler(req, res) {
  try {
    const response = await fetch('http://api.cup2022.ir/api/v1/match', requestOptions);
    const result = await response.json();
    res.status(200).json({matches: result.data});
  } catch (error) {
    res.status(400).json({error});
  }
}
