const endpoint = new URL('https://jsonplaceholder.typicode.com/comments?postId=1')

//console.log({endpoint});

// de la seccion de comements trae todo los que sean de postId igual a 1

const postId =  endpoint.searchParams.get('postId')

console.log({postId});

