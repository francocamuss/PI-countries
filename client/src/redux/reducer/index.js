
const initialState = {
    allCountries: [],
    countries: [],
    countryDetail: {},
    activities: []
}


const rootReducer = function(state = initialState, action){
    switch(action.type){
        case "GET_ALL_COUNTRIES":
            return {
                ...state,
                allCountries: action.countries,
                countries: action.countries
            }
        case "GET_COUNTRY_NAME":
            return{
                ...state,
                allCountries: action.countries
            }
        case "GET_COUNTRY_ID":
            return{
                ...state,
                countryDetail: action.countries[0]
            }
        case "POST":
            return{
                ...state
            }
        case "GET_COUNTRY_ACTIVITY":
            return{
                ...state,//Revisar back
                activities: action.activities
            }
        case "FILTER_CONTINENT":
            let filter = () => {
                if(action.payload === "North America" || 
                action.payload === "Europe" || 
                action.payload === "Africa" ||
                action.payload === "South America" || 
                action.payload === "Oceania" || 
                action.payload === "Asia" || 
                action.payload === "Antarctica"){
                    let filter = state.countries.filter(e => e.continent === action.payload);
                    return filter;
                }else{
                    return state.countries
                }
            }
            return{
                ...state,
                allCountries: filter()
            }
        case "ORDER_NAME":
            let sortCountries = action.payload === "asc"?
            state.allCountries.sort(function(a,b){
                if(a.name<b.name){
                    return -1
                }
                if(a.name>b.name){
                    return 1
                }
                return 0
            }):
            state.allCountries.sort(function(a,b){
                if(a.name>b.name){
                    return -1
                }
                if(a.name<b.name){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                allCountries: sortCountries
            }
        case "ORDER_POPULATION":
            let countriesPopulation = action.payload === "asc"?
            state.allCountries.sort(function(a,b){
                if(a.population<b.population){
                    return -1
                }
                if(a.population>b.population){
                    return 1
                }
                return 0
            }):
            state.allCountries.sort(function(a,b){
                if(a.population>b.population){
                    return -1
                }
                if(a.population<b.population){
                    return 1
                }
                return 0
            })
            return {
                ...state,
                allCountries: countriesPopulation
            }
        case "FILTER_ACTIVITIES":
            const actions = action.payload
            const activities = state.countries.filter(e => {
                for(let i=0; i<e.activities.length ; i++){
                    let activity = e.activities[i].name
                    if(activity !== undefined){
                        if(actions.toLowerCase() === activity.toLowerCase()){
                            return true
                    }} 
                }
                return false
            })
            return {
                ...state,
                allCountries: activities
            }
        case "DELETE_COUNTRY":
            return{
                ...state,
                allCountries: state.countries.filter(e => e.id !== action.payload)
            }
        case "SET_NULL":
            return {
                ...state,
                countryDetail: {}
            }
        default:
            return {...state};
    }
}

export default rootReducer;