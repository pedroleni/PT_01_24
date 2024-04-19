export const FigureUser = (user) => {
    return (
        <figure>
            <img src={user.user.image} alt={'user image'} />
            <h4>Email: {user.user.email}</h4>
        </figure>
    )
}
