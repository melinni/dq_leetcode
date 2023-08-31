/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let oldcolor = image[sr][sc]
  if (oldcolor !== newColor) {
    dfs(image, sr, sc, newColor, oldcolor)
  }
  return image;
};

function dfs(image, x, y, newColor, oldcolor) {
  if (x < 0 || y < 0 || x >= image.length || y >= image[0].length || image[x][y] !== oldcolor) {
    return
  }

  image[x][y] = newColor

  dfs(image, x-1, y, newColor, oldcolor)
  dfs(image, x+1, y, newColor, oldcolor)
  dfs(image, x, y-1, newColor, oldcolor)
  dfs(image, x, y+1, newColor, oldcolor)

  return image
}
