import useGlobalState from './useGlobalState.js'
import useArcheVersion from './useArcheVersion.js'
import defaultCronistArche from '../cronist/Arche-v1.js'

function createCronistMap(cronistObject, version) {
  const {
    cronistArche,
  } = cronistObject

  const result = new Map()

  cronistArche.forEach(item => {
    result.set(item.name, item)
  })
  result.version = version

  return result
}

const initial = createCronistMap({
  cronistArche: defaultCronistArche,
}, defaultArcheVersion.toLowerCase())

/**
 * @name useCronistMap
 *
 * @docs
 * ```coffeescript [specscript]
 * useCronistMap() -> [cronistMap Map, setCronistMap function]
 * ```
 */
function useCronistMap() {
  const [cronistMap, setCronistMap] = useGlobalState('cronistMap', initial)
  const [ArcheVersion] = useArcheVersion()

  useEffect(function updateMdastMap() {
    if (ArcheVersion != cronistMap.version) {
      all({
        cronistArche: import(`../cronist/Arche-${ArcheVersion.toLowerCase()}.js`),
      }).then(pipe([
        map(get('default')),
        curry.arity(2, createCronistMap, __, ArcheVersion),
        setCronistMap,
      ]))
    }
  }, [ArcheVersion])

  return [cronistMap, setCronistMap]
}

export default useCronistMap
