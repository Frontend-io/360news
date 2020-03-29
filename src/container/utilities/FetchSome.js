
// Return Only specific articles from the news

const FetchSome = (items, toFetch)=>{
    let properties = items.slice(0, toFetch)
    return {
        properties
    }
}
export default FetchSome
