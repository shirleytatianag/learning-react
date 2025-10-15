export interface User {
  id: number
  name: string
  location: string
  role: string
}

export const getUserAction = async (id: number) => {
  console.log('Fetching user...')
  await new Promise(resolve => setTimeout(resolve, 200));
  console.log('User fetched')
  return {
    id: id,
    name: 'Fernando',
    location: 'Ocaña, Norte de Santander',
    role: 'Un rol de usuario'
  }
}