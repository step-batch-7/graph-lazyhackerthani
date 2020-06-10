//Example 
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to 
// Should return true.

const getAdjacentList = function (pairs) {
  const adjacentList = {};
  pairs.forEach(([from,to]) => {
    if (adjacentList[from] === undefined) {
      adjacentList[from] = [to];
    } else {
      adjacentList[from].push(to);
    }
  });
  return adjacentList;
}

const bfs = function(pairs,source,target){
  const visited = [];
  const queue = [source];
  let found = false;
  const adjacencyList = getAdjacentList(pairs);
  while (queue.length > 0 && found === false){
    let currSource = queue.shift();
    let listToSearch = adjacencyList[currSource] || [];
    listToSearch.forEach(element => {
      if (element===target) {
        found = true;
      }
      if (!(queue.includes(element))) {
        queue.push(element);
      }
    });
    visited.push(currSource);
  }
  return found;
};

module.exports = {bfs};
