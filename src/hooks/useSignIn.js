

export default function useSignIn(initialValue) {
    axios.get('/data/users.json')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}