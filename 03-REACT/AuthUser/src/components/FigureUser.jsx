import './FigureUser.css'
export const FigureUser = (user) => {
    return (
        <figure>
            <img className="imageUser" src={user.user.image} alt={'user image'} />
            <h4 className="emailUser">Email: {user.user.email}</h4>
        </figure>
    )
}
