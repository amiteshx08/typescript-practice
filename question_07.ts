const getResultByPath = (path:string, obj:object) => {
    const normalisedPath = path.replace(/\[(\d+)]/g, '.$1')
    const keys = normalisedPath.split('.')

    let result:object = obj
    for(let key of keys) {
        if(result === undefined || result === null) break
        result = result[key as keyof object] // /Object is more premissive and less strict whereas object is much stricter
    }
    return result
}

console.log(getResultByPath("data.results.status", {data:{results:{status:"completed",error:""}}}))