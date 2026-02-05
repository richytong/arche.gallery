import useGlobalState from './useGlobalState.js'
import useArcheVersion from './useArcheVersion.js'
import defaultCronistArche from '../cronist/Arche-v1.js'
import defaultCronistArcheWebSocket from '../cronist/Arche-websocket-v1.js'

// TODO

function createCronistMap(cronistObject, version) {
  const {
    cronistArche,
    cronistArcheWebSocket,
  } = cronistObject

  const result = new Map()

  cronistArche.forEach(item => {
    result.set(item.name, item)
  })
  cronistArcheWebSocket.forEach(item => {
    result.set(item.name, item)
  })
  result.version = version

  const cronistWebSocketSecureServer =
    cronistArcheWebSocket.find(item => item.name == 'WebSocketSecureServer')
  const cronistWebSocketServer =
    cronistArcheWebSocket.find(item => item.name == 'WebSocketServer')

  if (cronistWebSocketSecureServer && cronistWebSocketServer) {
    cronistWebSocketSecureServer.methods = omit(cronistWebSocketServer.methods, [])
    for (const method of cronistWebSocketSecureServer.methods) {
      for (const child of method.mdast.docs.children) {
        if (child.type == 'code' && child.lang == 'javascript') {
          child.value = child.value.replace(
            'new WebSocketServer()',
            'new WebSocketSecureServer({\n  key: fs.readFileSync(\'/path/to/my-key\'),\n  cert: fs.readFileSync(\'/path/to/my-cert\'),\n})'
          )
        }
      }
    }
  }

  return result
}

const initial = createCronistMap({
  cronistArche: defaultCronistArche,
  cronistArcheWebSocket: defaultCronistArcheWebSocket,
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
        cronistArcheWebSocket: import(`../cronist/Arche-websocket-${ArcheVersion.toLowerCase()}.js`),
      }).then(pipe([
        map(get('default')),
        curry.arity(2, createCronistMap, __, ArcheVersion),
        cronistMap1 => setCronistMap(cronistMap1),
      ]))
    }
  }, [ArcheVersion])

  return [cronistMap, setCronistMap]
}

export default useCronistMap
