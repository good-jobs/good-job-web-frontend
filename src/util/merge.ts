import rawType from './raw-type'

function merge<T = Object, K = Object>(oldObj: T, newObj: K) {
  if (rawType(oldObj) !== 'Object' || rawType(newObj) !== 'Object')
    throw new Error('Object 형태만 가능합니다.')
  return Object.assign({}, oldObj, newObj)
}

export default merge
