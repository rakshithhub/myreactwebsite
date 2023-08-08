import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

const AppContext = createContext();

const initialState = {
    name:"",
    imgSrc: "",
    description: "",
    servicess: [[]]
}

export const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    
    const API = "https://dummyjson.com/products";
    
    const updateHomePage = () => {
        return dispatch({
            type: "HOME_PAGE",
            payload: {
                name: "Rakshit Chaurasia",
                imgSrc: "https://ouch-cdn2.icons8.com/_Mss_g1r2_YMTo8HRdriXtBXjUP758Qv5-hKAv3czWU/rs:fit:394:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTA2/L2Y0NWZmZWY4LWJj/NzItNGZlMC1hZGJk/LTNkZmNjYmZlN2Jj/NS5wbmc.png",
                description: "Hi, My Name is Rakshit Chaurasia. I am a Web Developer using React. I'm 21 year old. I'm self motivationl person and one of my good strength is i'm a team worker."
            }
        });
    }


    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_PAGE",
            payload: {
                name: "About Learn Vern",
                imgSrc: "https://previews.123rf.com/images/ziemanzgraph/ziemanzgraph1511/ziemanzgraph151100048/48859212-girl-play-mobile.jpg",
                description: "A website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server."
            }
        });
    }
    
    const getService = async(url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type:"GET_SERVICES", payload:data.products})
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getService(API);
    },[]);

    return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}