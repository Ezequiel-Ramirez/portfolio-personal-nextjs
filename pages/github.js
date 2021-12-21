import Error from "../pages/_error"
import Layaut from "../components/Layaut"

const github = ({user, statusCode}) => {
    console.log(user)
    if (statusCode) {
        return <Error statusCode={statusCode} />
    }
    return (
        <Layaut footer={false} dark>
           <div className="row">
                <div className="col-md-4 offset-md-4">
                <div className="card card-body text-center">
                    <h1 className="mb-3">{user.name}</h1>
                    <img className="img-fluid" src={user.avatar_url} alt=""/>
                    <p className="lead">{user.bio}</p>
                    <a href={user.company} target="_blank" className="btn btn-outline-secondary my-2">Mi Sitio</a>
                    <a href={user.html_url} target="_blank" className="btn btn-outline-secondary my-2">Ir a Github</a>
                    
                </div>
                </div>
              </div>
              
        </Layaut>
    )
}
export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/Ezequiel-Ramirez')
    const data = await res.json()
    console.log(data)
    const statusCode = res.status > 200  ? res.status : false;
    return {
        props: {
            user: data,
            statusCode
        }, // will be passed to the page component as props
    }
}

export default github
