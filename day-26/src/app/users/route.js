import {users} from './data'

export async function GET(){
    return Response.json(users)
}

export async function POST(request){
    const user = await request.json()
    const newUser = {
        id:users.length+1,
        userName:user.userName
    }
    users.push(newUser)
    return new Response(JSON.stringify(newUser))
}