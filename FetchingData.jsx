import React, { useEffect, useReducer} from 'react'
import "../Fetchdata.css"
//loading 
//if everything is fine fetch the post
//if everything is not fine display the errors


const initialState = 
{
    loading: false,
    error: false,
    posts:[]
}
function reducer(state,action)
{
    // loading, error, posts so use 3 dispatch
    switch(action.type)
    {
        case "fetch-start":
            return {
                ...state,
                loading: true,
                
            }
        case 'fetch_success':
            return {
                ...state,
                posts: action.payload,
              
            }
        case "fetch_error":
            return {
                ...state,
                error:true
            }
        default :
           return state;
    }

}
const FetchData = () => {
const [state,dispatch]  = useReducer(reducer,initialState)
    const handleFetch = (e) =>
    {
        dispatch({type:'fetch-start'})
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then((data => {
            dispatch({type: 'fetch_success', payload:data})
      
        } )
     
    )

    .catch((err) =>
    {
       dispatch({type: 'fetch_error'})
    })
    }
  return (
    <div className="container">
        <button className="fetch-button"
        onClick={handleFetch}> {state.loading?'Loading...':'Fetch Posts'}
        </button>

           {state.error && <span className="error-message">
                Something Went Wrong
            </span>
           }

    <div className="card-container">
  {state.posts.map((post) => (
    <div className="card" key={post.id}>
      <div className="card-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-price">Price: ${post.price}</p>
      </div>
      <div className="card-actions">
        <button className="card0-btn">Buy Now</button>
      </div>
    </div>
  ))}
</div>


    </div>
  )
}

export default FetchData
