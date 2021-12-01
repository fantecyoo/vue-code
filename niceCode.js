// 遍历对象
() => Object.keys(builds).map(genConfig)
function genConfig (name) {
  const opts = builds[name]
}


function build (builds) {
  let built = 0
  const total = builds.length
  const next = () => {
    buildEntry(builds[built]).then(() => {
      built++
      if (built < total) {
        next()
      }
    }).catch(logError)
  }

  next()
}