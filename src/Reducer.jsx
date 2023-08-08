export const reducer = (state,action) => {
    switch(action.type){
        case "HOME_PAGE": return{
            ...state,
            name: action.payload.name,
            imgSrc: action.payload.imgSrc,
            description: action.payload.description,
        }
        case "ABOUT_PAGE": return{
                ...state,
                name: action.payload.name,
                imgSrc: action.payload.imgSrc,
                description: action.payload.description,
        }
        case "GET_SERVICES": return{
            ...state,
            servicess: [action.payload] 
    }
        default : return state;
    }
}