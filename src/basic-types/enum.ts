/**
 * 枚举
 */
enum Directions {
  Top = 'Top',
  Right = 'Right',
  Bottom = 'Bottom',
  Left = 'Left'
}

const direction: Directions = Directions.Bottom;


/**
 * 未指定值枚举
 */
enum UnDirections {
  Top,
  Right = 'Right',
  Bottom = 2,
  Left
}
