
type UserResponse = {
    userResponse: string
}

export const UserOutput = (props:UserResponse) =>  {
    return (<div><label>To replace {props.userResponse}
    </label></div>)

}