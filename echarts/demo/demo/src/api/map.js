/**
*  adcode   行政区code(如果点击到了县，这个地方就是市的code)
*  countyCode  县的行政区code  下钻到县了必传
*/
export function getGeoJson (adcode, countyCode = '') {
    return new Promise((resolve, reject) => {
        AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {
            var districtExplorer = new DistrictExplorer()
            districtExplorer.loadAreaNode(adcode, (error, areaNode) => {
                if (error) {
                    console.error(error)
                    reject(error)
                    return
                }
                let mapJson = {
                    features: {}
                }
                let Json = areaNode.getSubFeatures()
                //如果countyCode存在，那么说明当前是县，那就用市获取到的geoJson去截取
                if (countyCode) {
                    Json = Json.filter(item => item.properties.adcode == countyCode)
                }
                mapJson.features = Json
                resolve(mapJson)
            })
        })
    })
}