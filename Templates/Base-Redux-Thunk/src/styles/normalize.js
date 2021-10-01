import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const scaleFont = width / 320

/**
 * Normalize Font Size respect to window width with the scale width:320
 * @param {number} size
 */
export function normalizeFontSize(size) {
  const newSize = size * scaleFont
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

const scaleWidth = width / 420

/**
 * Normalize px respect to window width with the scale width:420
 * @param {number, string} size
 */
export function normalizePx(size) {
  if (typeof size === 'string') {
    return size
  }
  const newSize = size * scaleWidth
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

/**
 * Compute window width * p
 * @param {number} p - 0 < p <= 1
 */
export const pWidth = p => width * p

/**
 * Compute window height * p
 * @param {number} p - 0 < p <= 1
 */
export const pHeight = p => height * p
