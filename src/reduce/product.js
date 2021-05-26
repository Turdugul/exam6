import productsData from "../data/product"
const products = (state=productsData,action) => {


    if (action.type==="SEARCH"){
        return productsData.filter(item=>item.title.includes(action.search))
    }

    return state
}
export default products;