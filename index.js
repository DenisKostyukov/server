async function getPrimitivesAsync () {
  return [1, '1', true, null, undefined, BigInt(5), Symbol()]
}
async function getPrimitive () {
  const primitives = await getPrimitivesAsync()
  console.log(primitives)
  return primitives;
}


async function getPromise(){
  const promise = new Promise(res => {
    setTimeout(()=>{
     return res(2)
    }, 4000)
  })
  const myPromise = await promise
  console.log(myPromise)
  return myPromise
}