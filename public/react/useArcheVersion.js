import useGlobalState from './useGlobalState.js'
import getCookie from './getCookie.js'

const initial = getCookie('ArcheVersion') ?? defaultArcheVersion

// useArcheVersion() -> [ArcheVersion string, setArcheVersion function]
const useArcheVersion = function () {
  return useGlobalState('ArcheVersion', initial)
}

export default useArcheVersion
