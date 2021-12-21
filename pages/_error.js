import Layaut from "../components/Layaut"

const _error = ({statusCode}) => {
    return (
        <Layaut>
       {
              statusCode  ?  <p className="text-center">Could not load your page: Status Code {statusCode}</p> :
               
                <p className="text-center">Something went wrong</p>
                
       }
           
        </Layaut>
    )
}

export default _error
